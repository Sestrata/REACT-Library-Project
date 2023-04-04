import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { bookServiceFactory } from "../../services/bookService";
import { useBookContext } from "../../contexts/BookContext";

export const EditBook = () => {
    const { onEditBookSubmit } = useBookContext();
    const { bookId } = useParams();
    const bookService = useService(bookServiceFactory);
    const { values, changeHandler, onSubmit, changeValues, formErrors } = useForm({
        _id: '',
        bookName: '',
        author: '',
        ganre: '',
        img: '',
        description: '',
    }, onEditBookSubmit);

    useEffect(() => {
        bookService.getOne(bookId)
            .then(result => {
                changeValues(result);
            });
    }, [bookId]); //[bookId]

    return (
        <section className="editBook">
            <form id="edit" method="post" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Edit Book</h1>
                    <div>
                        <label htmlFor="bookName">Book name:</label>
                        <input
                            value={values.bookName}
                            onChange={changeHandler}
                            type="bookName"
                            id="bookName"
                            name="bookName"
                        />
                        {formErrors.bookName && <p className="formError">{formErrors.bookName}</p>}
                    </div>
                    <div>
                        <label htmlFor="author">Author:</label>
                        <input
                            value={values.author}
                            onChange={changeHandler}
                            type="author"
                            id="author"
                            name="author"
                        />
                        {formErrors.author && <p className="formError">{formErrors.author}</p>}
                    </div>
                    <div>
                        <label htmlFor="ganre">Ganre:</label>
                        <select
                            name="ganre"
                            id="ganre"
                            value={values.ganre}
                            onChange={changeHandler}>
                            <option value="">---</option>
                            <option value="adventure">Adventure</option>
                            <option value="biography">Biography</option>
                            <option value="business">Business</option>
                            <option value="crime">Crime</option>
                            <option value="comedy">Comedy</option>
                            <option value="documentary">Documentary</option>
                            <option value="drama">Drama</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="historical">Historical</option>
                            <option value="horror">Horror</option>
                            <option value="novella">Novella</option>
                            <option value="romance">Romance</option>
                            <option value="satire">Satire</option>
                            <option value="sports">Sports</option>
                            <option value="tehnology&science">Technology & Science</option>
                            <option value="thriller">Thriller</option>
                        </select>
                        {formErrors.ganre && <p className="formError">{formErrors.ganre}</p>}
                    </div>
                    <div>
                        <label htmlFor="img">Image:</label>
                        <input
                            value={values.img}
                            onChange={changeHandler}
                            type="img"
                            id="img"
                            name="img"
                        />
                        {formErrors.img && <p className="formError">{formErrors.img}</p>}
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            value={values.description}
                            onChange={changeHandler}
                            name="description"
                            id="description"
                            cols="30" rows="10">
                        </textarea>
                        {formErrors.description && <p className="formError">{formErrors.description}</p>}
                    </div>
                    <div className="submitBtn">
                        <input type="submit" value="Edit book" />
                    </div>
                </div>
            </form>
        </section>
    );
};