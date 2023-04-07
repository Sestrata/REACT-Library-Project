import { Link } from "react-router-dom";
import { useState } from 'react';
import { CatalogItem } from "../Catalog/CatalogItem/CatalogItem";
import { useBookContext } from "../../contexts/BookContext";

export const Ganre = () => {
    const { books } = useBookContext();
    const [filteredData, setFilteredData] = useState([]);

    const filterResult = (ganreItem) => {
        const result = books.filter((currentData) => {
            return currentData.ganre.toLowerCase() === ganreItem.toLowerCase();
        });
        setFilteredData(result);
    }

    return (
        <section className="ganrePage">
            <h1>Ganres</h1>
            <ul>
                <li><Link a="#" onClick={() => filterResult('adventure')} >ADVENTURE</Link></li>
                <li><Link a="#" onClick={() => filterResult('biography')}>BIOGRAPHY</Link></li>
                <li><Link a="#" onClick={() => filterResult('business')}>BUSINESS</Link></li>
                <li><Link a="#" onClick={() => filterResult('comedy')}>COMEDY</Link></li>
                <li><Link a="#" onClick={() => filterResult('crime')}>CRIME</Link></li>
                <li><Link a="#" onClick={() => filterResult('documentary')}>DOCUMENTARY</Link></li>
                <li><Link a="#" onClick={() => filterResult('drama')}>DRAMA</Link></li>
                <li><Link a="#" onClick={() => filterResult('fantasy')}>FANTASY</Link></li>
                <li><Link a="#" onClick={() => filterResult('for kids')}>FOR KIDS</Link></li>
                <li><Link a="#" onClick={() => filterResult('historical')}>HISTORICAL</Link></li>
                <li><Link a="#" onClick={() => filterResult('horror')}>HORROR</Link></li>
                <li><Link a="#" onClick={() => filterResult('novella')}>NOVELLA</Link></li>
                <li><Link a="#" onClick={() => filterResult('romance')}>ROMANCE</Link></li>
                <li><Link a="#" onClick={() => filterResult('satire')}>SATIRE</Link></li>
                <li><Link a="#" onClick={() => filterResult('sports')}>SPORTS</Link></li>
                <li><Link a="#" onClick={() => filterResult('technologyscience')}>TECHNOLOGY & SCIENCE</Link></li>
                <li><Link a="#" onClick={() => filterResult('thriller')}>THRILLER</Link></li>
            </ul>

            <div className="ganreResult">
                {filteredData.length === 0 && filterResult && <h3 className="no-books">No books yet</h3>}

                <section className="flex-container flex">
                    {filteredData.map(x => <CatalogItem key={x._id} {...x} />)}
                </section>
            </div>
        </section>
    );
};