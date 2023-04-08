import { useState } from 'react';

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({
        email: '',
        username: '',
        password: '',
        rePassword: '',

        bookName: '',
        author: '',
        genre: '',
        img: '',
        description: '',
    });

    const changeHandler = (e) => {
        const value = e.target.value;
        let errors = {};

        if (e.target.name === "email" && (value.length < 2 || value.length > 20)) {
            errors.email = 'Email should be between 2 and 20 characters long.';
        }

        if (e.target.name === "username" && (value.length < 2 || value.length > 15)) {
            errors.username = 'Username should be between 2 and 15 characters long.';
        };

        if (e.target.name === "password" && (value.length < 5 || value.length > 15)) {
            errors.password = 'Password should be between 5 and 15 characters long.';
        };


        if (e.target.name === "email" && (value.length < 2 || value.length > 20)) {
            errors.email = 'Email should be between 2 and 20 characters long.';
        };

        if (e.target.name === "password" && (value.length < 5 || value.length > 15)) {
            errors.password = 'Password should be between 5 and 15 characters long.';
        };


        if (e.target.name === "bookName" && (value.length < 2 || value.length > 300)) {
            errors.bookName = 'Bookname should be between 2 and 50 characters long.';
        };

        if (e.target.name === "author" && (value.length < 2 || value.length > 100)) {
            errors.author = 'Author should be between 2 and 30 characters long.';
        };

        if (e.target.name === "description" && (value.length < 5 || value.length > 700)) {
            errors.description = 'Description should be between 5 and 300 characters long.';
        };

        setFormErrors(errors);
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(values);
        setValues(initialValues);
    };

    const changeValues = (newValues) => {
        const errors = {};

        if (newValues.name === "bookName" && (newValues.length < 2 || newValues.length > 200)) {
            errors.bookName = 'Bookname should be between 2 and 50 characters long.';
        };

        if (newValues.name === "author" && (newValues.length < 2 || newValues.length > 50)) {
            errors.author = 'Author should be between 2 and 30 characters long.';
        };

        if (newValues.name === "description" && (newValues.length < 5 || newValues.length > 500)) {
            errors.description = 'Description should be between 5 and 300 characters long.';
        };

        setFormErrors(errors);
        setValues(newValues);
    };

    return {
        values,
        formErrors,
        changeHandler,
        onSubmit,
        changeValues,
    };
};