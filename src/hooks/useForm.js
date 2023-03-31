import { useState } from 'react';

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);
    // const [formErrors, setFormErrors] = useState({});

    const changeHandler = (e) => {
         setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitHandler(values);
        setValues(initialValues);
    };

    const changeValues = (newValues) => {
        //todo: validate newValues shape(like initialValues)
        setValues(newValues);
    };

    return {
        values,
        changeHandler,
        onSubmit,
        changeValues,
    };
};


// export const useForm = (initialValues) => {
//     const [values, setValues] = useState(initialValues);
//     const [formErrors, setFormErrors] = useState({});
//     const [isSubmit, setIsSubmit] = useState(false);

//     const changeHandler = (e) => {
//         const { bookName, value } = e.target;
//         setValues({ ...values, [bookName]: value });
//     };

//     const onSubmit = (e) => {
//         e.preventDefault();
//         setFormErrors(validate(values));
//         setIsSubmit(true);
//     };

//     useEffect(() => {
//         if (Object.keys(formErrors).length === 0 && isSubmit) {

//         }
//     }, [formErrors])

//     const validate = (values) => {
//         const errors = {};
//         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        
//         if (!values.email) {
//             errors.email = "Email is required";
//         };
//         if (!values.username) {
//             errors.username = "Username is required";
//         };
//         if (!values.password) {
//             errors.email = "Password is required";
//         };

//         return errors;
//     };

//     const changeValues = (newValues) => {
//         //todo: validate newValues shape(like initialValues)

//         setValues(newValues);
//     };

//     return {
//         values,
//         formErrors,
//         changeHandler,
//         onSubmit,
//         changeValues,

//     };
// }