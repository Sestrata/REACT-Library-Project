import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useReducer } from "react";

import { bookServiceFactory } from "../../services/bookService";
import * as commentService from '../../services/commentService';
import { useService } from "../../hooks/useService";
import { useAuthContext } from "../../contexts/AuthContext";
import { useBookContext } from "../../contexts/BookContext";

import { AddComment } from "./AddComment/AddComent";
import { bookReducer } from "../../reducers/bookReducer";


export const BookDetails = () => {
    const { userId, isAuthenticated, userEmail } = useAuthContext();
    const { bookId } = useParams();
    const { deleteBook } = useBookContext();
    const [book, dispatch] = useReducer(bookReducer, {});
    const bookService = useService(bookServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            bookService.getOne(bookId),
            commentService.getAll(bookId)
        ]).then(([bookData, comments]) => {
            const bookState = {
                ...bookData,
                comments,
            };

            dispatch({ type: 'BOOK_FETCH', payload: bookState })
        });
    }, [bookId]); //[bookId]

    const onCommentSubmit = async (values) => {
        const response = await commentService.create(bookId, values.comment);

        dispatch({
            type: 'COMMENT_ADD',
            payload: response,
            userEmail
        });
    };

    const isOwner = book._ownerId === userId;

    const onDeleteClick = async () => {
        await bookService.delete(book._id);
        deleteBook(book._id);
        navigate('/catalog');
    };

    return (
        <section className="detailBook">
            <div className="detailInfo">
                <img src={book.img} alt="" />
                <section>
                    <h1>{book.bookName}</h1>
                    <h2>{book.author}</h2>
                    <h3>{book.ganre}</h3>
                    <p>{book.description}</p>

                    {isOwner && (
                        <div className="btnEditDel">
                            <Link to={`/catalog/${book._id}/edit`} className="editBtn" >EDIT</Link>
                            <Link to='' className="deleteBtn" onClick={onDeleteClick} > DELETE</Link>
                        </div>
                    )}
                    {/* <p>creator: {}</p> */}
                </section>
            </div >

            <div className="allComments">
                <div className="comments">
                    <h4>Comments:</h4>
                    {book.comments && book.comments.map(x => (
                        <div key={x._id}>
                            <p>{x.author.email}: {x.comment}</p>
                        </div>
                    ))}
                </div>

                {!book.comments?.length && (
                    <p>No comments yet.</p>
                )}
            </div>

            {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
        </section >
    )
}