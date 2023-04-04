import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Search = ({
    placeholder,
    data,
}) => {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.bookName.toLowerCase().includes(searchWord.toLowerCase())
                || value.author.toLowerCase().includes(searchWord.toLowerCase())
                || value.ganre.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === '') {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        };
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    }

    return (
        <div className="search-container">
            <div className="searchInputs">
                <input
                    type="text"
                    value={wordEntered}
                    placeholder={placeholder}
                    onChange={handleFilter}
                />
                <button type="submit" className="searchIcon">
                    {filteredData.length === 0
                        ? <i className="fas fa-search"></i>
                        : <i className="fas fa-times" onClick={clearInput}></i>}
                </button>
            </div>

            {filteredData.length !== 0 && (
                <div className="dataResult">
                    {filteredData.slice(0, 10).map((value, i) => {
                        return <Link to={value._id} key={i} className="dataItem" target="_blank">
                            <p><i className="far fa-hand-point-right"></i> <b>{value.bookName}</b> from <b>{value.author}</b>, <em>{value.ganre}</em></p>
                        </Link>
                    })}
                </div>
            )}
        </div>
    );
};