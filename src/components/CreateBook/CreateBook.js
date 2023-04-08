import { useBookContext } from '../../contexts/BookContext';
import { useForm } from '../../hooks/useForm';

export const CreateBook = () => {
    const { onCreateBookSubmit } = useBookContext();
    const { values, changeHandler, onSubmit, formErrors } = useForm({
        bookName: '',
        author: '',
        genre: '',
        img: '',
        description: '',
    }, onCreateBookSubmit);

    return (
        <section className="createBook" >
            <form id="create" method="POST" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Create book</h1>
                    <div>
                        <label htmlFor="bookName">Book name:</label>
                        <input
                            type="bookName"
                            id="bookName"
                            name="bookName"
                            value={values.bookName}
                            onChange={changeHandler}
                            required
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
                            required
                        />
                        {formErrors.author && <p className="formError">{formErrors.author}</p>}
                    </div>
                    <div>
                        <label htmlFor="genre">Genre:</label>
                        <select
                            name="genre"
                            id="genre"
                            value={values.genre}
                            onChange={changeHandler}
                            required
                        >
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
                        {formErrors.genre && <p className="formError">{formErrors.genre}</p>}
                    </div>
                    <div>
                        <label htmlFor="img">Image:</label>
                        <input
                            type="img"
                            id="img"
                            name="img"
                            value={values.img}
                            onChange={changeHandler}
                            required
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
                            cols="30" rows="10"
                            required
                        >
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
