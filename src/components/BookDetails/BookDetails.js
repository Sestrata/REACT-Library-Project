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
        ]).then(([bookData, comments]) => {
            setBook({
                ...bookData,
                comments
            });
        });
    }, [bookId]);

    const onCommentSubmit = async (values) => {
        const response = await commentService.createComment(bookId, values.comment);

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
                    <h3>{book.genre}</h3>
                    <p>{book.description}</p>

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
                            <p><i className="far fa-user"></i> <b>{x.author.username}</b>: {x.comment}</p>
                        </div>
                    ))}
                </div>

                {!book.comments?.length && (
                    <p>No comments yet.</p>
                )}
            </div>

            {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
        </section >
    );
};
