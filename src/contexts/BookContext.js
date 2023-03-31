import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from 'react-router-dom';

import { bookServiceFactory } from '../services/bookService';

export const BookContext = createContext();

export const BookProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const bookService = bookServiceFactory();

    useEffect(() => {
        bookService.getAll()
            .then(result => {
                setBooks(result)
            })
    }, []); // []

    const onCreateBookSubmit = async (data) => {
        const newBook = await bookService.createBook(data);
        setBooks(state => [...state, newBook]);
        navigate('/catalog');
    };

    const onEditBookSubmit = async (values) => {
        const result = await bookService.editBook(values._id, values);
        setBooks(state => state.map(x => x._id === values._id ? result : x));
        navigate(`/catalog/${values._id}`);
    };

        const getBook = (bookId) => {
            return books.find(book => book._id === bookId);
        };

        const deleteBook = (bookId) => {
            setBooks(state => state.filter(book => book._id !== bookId));
        };

    const contextValues = {
        books,
        onCreateBookSubmit,
        onEditBookSubmit,
        getBook,
        deleteBook
    };

    return (
        <BookContext.Provider value={contextValues}>
            {children}
        </BookContext.Provider>
    );
};

export const useBookContext = () => {
    const context = useContext(BookContext);
    return context;
};