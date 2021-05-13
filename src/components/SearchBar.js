import React, { useContext, useEffect, useState } from 'react';
import { Provider } from '../context';

function SearchBar(props) {
    const [search, setSearch] = useState('');
    const { data, setData, menu } = useContext(Provider);

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchResults = menu.filter((item) => {
            if (item.title.includes(search)) {
                return item;
            }
            if (search === "all") return item;

        });

        setData(searchResults);

        console.log("results below:");
        console.log(searchResults);
        console.log(search + "submitted");
    }

    useEffect(() => {

    }, [data])

    return (
        <div className="search">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input className="search-text" type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="ie: all keto paleo"
                />
                <button className="submit" type="submit" >search</button>

            </form>
        </div>
    );
}

export default SearchBar;