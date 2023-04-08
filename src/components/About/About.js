import { useState } from 'react';
import { TypeWriter } from '../commonAnimation/TypeWriter/TypeWriter';
import { useBookContext } from "../../contexts/BookContext";

export const About = () => {
    const { books } = useBookContext();
    const allBooks = books.length;
    const [show, toggleShow] = useState(true);

    return (
        <section className="about">
            <div className="typeWriter">
                <TypeWriter text={'Hii, everyone! In LIBRARY you can find a wide variety of books. If you want to see information about total number of books which we have and also by individual genres, please, press the button below. Enjoy reading!'} />
            </div>
            <div className="btnHideShow">
                <button onClick={() => toggleShow(!show)}>
                    {show ? "Show" : "Hide"}
                </button>
            </div>
            <div className="aboutCountBooks">
                {!show &&
                    <div>
                        <div className="aboutAllBooks">
                            <h1>ALL BOOKS: {allBooks}</h1>
                        </div>

                        <ul>
                            <li>ADVENTURE: {books.filter((currentData) => currentData.genre === 'adventure').length}</li>
                            <li>BIOGRAPHY: {books.filter((currentData) => currentData.genre === 'biography').length}</li>
                            <li>BUSINESS: {books.filter((currentData) => currentData.genre === 'business').length}</li>
                            <li>COMEDY: {books.filter((currentData) => currentData.genre === 'comedy').length}</li>
                            <li>CRIME: {books.filter((currentData) => currentData.genre === 'crime').length}</li>
                            <li>DOCUMENTARY: {books.filter((currentData) => currentData.genre === 'documentary').length}</li>
                            <li>DRAMA: {books.filter((currentData) => currentData.genre === 'drama').length}</li>
                            <li>FANTASY: {books.filter((currentData) => currentData.genre === 'fantasy').length}</li>
                            <li>FOR KIDS: {books.filter((currentData) => currentData.genre === 'for kids').length}</li>
                            <li>HISTORICAL: {books.filter((currentData) => currentData.genre === 'historical').length}</li>
                            <li>HORROR: {books.filter((currentData) => currentData.genre === 'horror').length}</li>
                            <li>NOVELLA: {books.filter((currentData) => currentData.genre === 'novella').length}</li>
                            <li>ROMANCE: {books.filter((currentData) => currentData.genre === 'romance').length}</li>
                            <li>SATIRE: {books.filter((currentData) => currentData.genre === 'satire').length}</li>
                            <li>SPORTS: {books.filter((currentData) => currentData.genre === 'sports').length}</li>
                            <li>TECHNOLOGY & SCIENCE: {books.filter((currentData) => currentData.genre === 'technologyscience').length}</li>
                            <li>THRILLER: {books.filter((currentData) => currentData.genre === 'thriller').length}</li>
                        </ul>
                    </div>
                }

            </div>
        </section>
    );
};