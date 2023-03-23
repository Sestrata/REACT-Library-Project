import { CatalogItem } from "../Catalog/CatalogItem/CatalogItem";

export const Home = ({
    books,
}) => {
    return (
        <section className="homePage">
            <h1>Last three books</h1>
            <ul>
                {books.map(x => <CatalogItem key={x._id} {...x} />).slice(-3)}
            </ul>
            {books.length === 0 && (<h3 className="no-books">No books yet</h3>)}
        </section>
    )
}