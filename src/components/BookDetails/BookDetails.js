import { useParams } from "react-router-dom";
import { useEffect, useState, } from "react";

import { bookServiceFactory } from "../../services/bookService";
import { useService } from "../../hooks/useService";

export const BookDetails = () => {
    const { bookId } = useParams();
    const [book, setBook] = useState({});
    const bookService = useService(bookServiceFactory);

    useEffect(() => {
        bookService.getOne(bookId)
            .then(result => {
                setBook(result);
            });
    }, [bookId, bookService]); //, [bookId]


    return (
        <section className="detailBook">
            <div>
                <img src={book.img} alt="" />
                <section>
                    <h1>{book.bookName}</h1>
                    <h2>{book.author}</h2>
                    <h3>{book.ganre}</h3>
                    <p>{book.description}</p>
                    <button type="submit" className="editBtn" >EDIT</button>
                    <button type="submit" className="deleteBtn" > DELETE</button>
                </section>
            </div >
        </section >
    )
}