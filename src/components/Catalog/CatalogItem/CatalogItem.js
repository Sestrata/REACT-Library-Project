
import { Link } from 'react-router-dom';

export const CatalogItem = ({
    _id,
    bookName,
    author,
    genre,
    img,
}) => {

    return (
        <div className="book">
            <img src={img} alt="" />
            <section className="small-container">
                <h3>{bookName}</h3>
                <p>{author}</p>
                <p>{genre}</p>
                <div className="btn">
                    <Link to={`/catalog/${_id}`} className="detailBtn">DETAILS</Link>
                </div>
            </section>
        </div>
    );
};