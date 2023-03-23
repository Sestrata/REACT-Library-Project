import { Link } from 'react-router-dom';

export const CatalogItem = ({
    _id,
    bookName,
    author,
    ganre,
    img,
}) => {
    return (
        <li>
            <img src={img} alt="" />
            <section>
                <h3>{bookName}</h3>
                <p>{author}</p>
                <p>{ganre}</p>
            </section>
            <Link to={`/catalog/${_id}`} className="detailBtn">DETAILS</Link>
        </li>
    )
}