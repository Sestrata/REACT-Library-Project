import { useBookContext } from '../../contexts/BookContext';
import { useForm } from '../../hooks/useForm';

export const CreateBook = () => {
    const { onCreateBookSubmit } = useBookContext();
    const { values, changeHandler, onSubmit, formErrors } = useForm({
        bookName: '',
        author: '',
        ganre: '',
        img: '',
        description: '',
    }, onCreateBookSubmit);

    return (
        <section className="createBook" >
            <form id="create" method="POST" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Create Book</h1>
                    <div>
                        <label htmlFor="bookName">Book name:</label>
                        <input
                            type="bookName"
                            id="bookName"
                            name="bookName"
                            value={values.bookName}
                            onChange={changeHandler}
                        />
                        {formErrors.bookName && <p className="formError">{formErrors.bookName}</p>}
                    </div>
                    <div>
                        <label htmlFor="author">Author:</label>
                        <input
                            type="author"
                            id="author"
                            name="author"
                            value={values.author}
                            onChange={changeHandler}
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
                            <option value="for kids">For kids</option>
                            <option value="historical">Historical</option>
                            <option value="horror">Horror</option>
                            <option value="novella">Novella</option>
                            <option value="romance">Romance</option>
                            <option value="satire">Satire</option>
                            <option value="sports">Sports</option>
                            <option value="technologyscience">Technology & Science</option>
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
                        <input type="submit" value="Create book" />
                    </div>
                </div>
            </form>
        </section>
    );
};
