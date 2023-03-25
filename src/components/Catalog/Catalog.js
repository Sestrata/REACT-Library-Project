import { CatalogItem } from "./CatalogItem/CatalogItem";
import { Search } from "../Search/Search";

export const Catalog = ({
    books,
}) => {
    return (
        <section className="catalogPage">
            <Search placeholder="Search..." data={books}/>
            <h1>All books</h1>
            <ul>
                {books.map(x => <CatalogItem key={x._id} {...x} />)}
            </ul>
            {books.length === 0 && (<h3 className="no-books">No books yet</h3>)}
        </section>
    )
}