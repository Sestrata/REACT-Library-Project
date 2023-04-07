import { TypeWriter } from '../commonAnimation/TypeWriter/TypeWriter';
import { useBookContext } from "../../contexts/BookContext";

export const About = () => {
    const { books } = useBookContext();
    const allBooks = books.length;

    return (
        <section className="about">
            <div className="typeWriter">
                <TypeWriter text={'Hii, everyone! In LIBRARY you can find a wide variety of books. Below you can see information about total number of books which we have and by individual ganres. Enjoy reading!'} />
            </div>
            <div className="aboutCountBooks">
                <div className="aboutAllBooks">
                    <h1>ALL BOOKS: {allBooks}</h1>
                </div>

                <ul>
                    <li>ADVENTURE: {books.filter((currentData) => currentData.ganre === 'adventure').length}</li>
                    <li>BIOGRAPHY: {books.filter((currentData) => currentData.ganre === 'biography').length}</li>
                    <li>BUSINESS: {books.filter((currentData) => currentData.ganre === 'business').length}</li>
                    <li>COMEDY: {books.filter((currentData) => currentData.ganre === 'comedy').length}</li>
                    <li>CRIME: {books.filter((currentData) => currentData.ganre === 'crime').length}</li>
                    <li>DOCUMENTARY: {books.filter((currentData) => currentData.ganre === 'documentary').length}</li>
                    <li>DRAMA: {books.filter((currentData) => currentData.ganre === 'drama').length}</li>
                    <li>FANTASY: {books.filter((currentData) => currentData.ganre === 'fantasy').length}</li>
                    <li>FOR KIDS: {books.filter((currentData) => currentData.ganre === 'for kids').length}</li>
                    <li>HISTORICAL: {books.filter((currentData) => currentData.ganre === 'historical').length}</li>
                    <li>HORROR: {books.filter((currentData) => currentData.ganre === 'horror').length}</li>
                    <li>NOVELLA: {books.filter((currentData) => currentData.ganre === 'novella').length}</li>
                    <li>ROMANCE: {books.filter((currentData) => currentData.ganre === 'romance').length}</li>
                    <li>SATIRE: {books.filter((currentData) => currentData.ganre === 'satire').length}</li>
                    <li>SPORTS: {books.filter((currentData) => currentData.ganre === 'sports').length}</li>
                    <li>TECHNOLOGY & SCIENCE: {books.filter((currentData) => currentData.ganre === 'technologyscience').length}</li>
                    <li>THRILLER: {books.filter((currentData) => currentData.ganre === 'thriller').length}</li>
                </ul>

            </div>
        </section>
    );
};