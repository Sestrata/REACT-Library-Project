import { Link } from 'react-router-dom';

export const CatalogItem = ({
    _id,
    bookName,
    author,
    ganre,
    img,
}) => {

    return (
        <div className="book">
            <img src={img} alt="" />
            <section className="small-container">
                <h3>{bookName}</h3>
                <p>{author}</p>
                <p>{ganre}</p>
                <Link to={`/catalog/${_id}`} className="detailBtn">DETAILS</Link>
            </section>
        </div>
    )
}