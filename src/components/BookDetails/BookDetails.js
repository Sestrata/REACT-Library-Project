import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import { bookServiceFactory } from "../../services/bookService";
import { useService } from "../../hooks/useService";
import { AuthContext } from "../../contexts/AuthContext";

export const BookDetails = () => {
    // const { username } = useContext(AuthContext);
    const navigate = useNavigate();
    const { userId } = useContext(AuthContext);
    const { bookId } = useParams();
    const [book, setBook] = useState({});
    const bookService = useService(bookServiceFactory);

    useEffect(() => {
        bookService.getOne(bookId)
            .then(result => {
                setBook(result);
            });
    }, [bookId, bookService]); //[]

    const isOwner = book._ownerId === userId;

    const onDeleteClick = async () => {
        await bookService.delete(book._id);
        navigate('/catalog');
    };

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
                            <Link to={`/catalog/${book._id}/edit`} className="editBtn" >EDIT</Link>
                            <Link to='' className="deleteBtn" onClick={onDeleteClick} > DELETE</Link>
                        </div>
                    )}
                    {/* <p>creator: {username}</p> */}
                </section>
            </div >
        </section >
    )
}