import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
        try {
            const newBook = await bookService.createBook(data);
            setBooks(state => [...state, newBook]);
            navigate('/catalog');
        } catch (errors) {
            toast.error('All fields are require');
        }
    };

    const onEditBookSubmit = async (values) => {
        try {
            const result = await bookService.editBook(values._id, values);
            setBooks(state => state.map(x => x._id === values._id ? result : x));
            navigate(`/catalog/${values._id}`);
        } catch (errors) {
            toast.error('All fields are require');
        }
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