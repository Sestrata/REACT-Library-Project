import { useBookContext } from "../../contexts/BookContext";

import { CatalogItem } from "./CatalogItem/CatalogItem";
import { Search } from "../Search/Search";

export const Catalog = () => {
    const { books } = useBookContext();

    return (
        <section className="catalogPage">
            <Search placeholder="Search..." data={books} />
            <h1>All books</h1>

            <section className="flex-container flex">
                {books.map(x => <CatalogItem key={x._id} {...x} />)}
            </section>

            {books.length === 0 && (<h3 className="no-books">No books yet</h3>)}
        </section>
    );
};
