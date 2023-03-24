import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import { bookServiceFactory } from "../../services/bookService";
import { useService } from "../../hooks/useService";
import { AuthContext } from "../../contexts/AuthContext";

export const BookDetails = () => {
    const { userId } = useContext(AuthContext);
    const { bookId } = useParams();
    const [book, setBook] = useState({});
    const bookService = useService(bookServiceFactory);

    useEffect(() => {
        bookService.getOne(bookId)
            .then(result => {
                setBook(result);
            });
    }, [bookId, bookService]); //, [bookId]

    const isOwner = book._id === userId;

    return (
        <section className="detailBook">
            <div>
                <img src={book.img} alt="" />
                <section>
                    <h1>{book.bookName}</h1>
                    <h2>{book.author}</h2>
                    <h3>{book.ganre}</h3>
                    <p>{book.description}</p>

                    {isOwner && (
                        <div className="btnEditDel">
                            <button type="submit" className="editBtn" >EDIT</button>
                            <button type="submit" className="deleteBtn" > DELETE</button>
                        </div>
                     )}
                </section>
            </div >
        </section >
    )
}