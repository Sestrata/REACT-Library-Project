import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { bookServiceFactory } from "../../services/bookService";
import * as commentService from '../../services/commentService';
import { useService } from "../../hooks/useService";
import { useAuthContext } from "../../contexts/AuthContext";
import { useBookContext } from "../../contexts/BookContext";

import { AddComment } from "./AddComment/AddComent";

export const BookDetails = () => {
    const { userId, isAuthenticated, username } = useAuthContext();
    const { bookId } = useParams();
    const { deleteBook } = useBookContext();
    const [book, setBook] = useState({});
    const bookService = useService(bookServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            bookService.getOne(bookId),
            commentService.getAll(bookId)
        ]).then(([bookData, commentsData]) => {
            setBook({
                ...bookData,
                commentsData
            });
        });
    }, [bookId]); //[bookId]

    const onCommentSubmit = async (values) => {
        const response = await commentService.createComment(bookId, values.comment);
        // const result = await bookService.addComment(bookId, {
        //     username,
        //     comments,
        // });

        setBook(state => ({
            ...state,
            comments: [
                ...state.comments,
                {
                    ...response,
                    author: { username }
                }
            ]
        }));
        // setUsername('');
        // setComment('');
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

                    {/* <p>creator: {username}</p> */}

                    {isOwner && (
                        <div className="btnEditDel">
                            <Link to={`/catalog/${book._id}/edit`} className="editBtn" >EDIT</Link>
                            <Link to='' className="deleteBtn" onClick={onDeleteClick} > DELETE</Link>
                        </div>
                    )}

                </section>
            </div >

            <div className="allComments">
                <div className="comments">
                    <h4>Comments:</h4>
                    {book.comments && book.comments.map(x => (
                        <div key={x._id}>
                            <p>{x.author.username}{x.comment}</p>
                        </div>
                    ))}
                </div>

                {/* {!book.comments?.length && (
                    <p>No comments yet.</p>
                )} */}
            </div>

            {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
        </section >
    )
}
//
