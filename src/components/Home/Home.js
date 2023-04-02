import { useBookContext } from "../../contexts/BookContext";
import { CatalogItem } from "../Catalog/CatalogItem/CatalogItem";

export const Home = () => {
    const { books } = useBookContext();

    return (
        <section className="homePage">
            <section className="imgWelcome">
                <div className="welcome">
                    <h1>Welcome in LIBRARY</h1>
                </div>
                <img src="https://web-static.wrike.com/blog/content/uploads/2017/09/books-creative-teams-906x518.jpg?av=cd8b23bd67a85ffd7829ab86f7939f12" alt="" />
            </section>

            <h1>Last three books</h1>
            <section className="catalogPage">
                {books.map(x => <CatalogItem key={x._id} {...x} />).slice(-3)}
            </section>
            {books.length === 0 && (<h3 className="no-books">No books yet</h3>)}
        </section>
    )
};