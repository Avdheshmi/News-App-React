import React, { useEffect, useState } from 'react';
import Card from "./Card";



const SearchResults = (props) => {
    const [news, setNews] = useState(null);
    useEffect(() => {
        let getData = async () => {
            let response = await fetch(`https://api.newscatcherapi.com/v2/search?q=${props.searchText}&page_size=20&lang=hi`, {
                method: "GET",
                headers: {
                    "x-api-key": "K0wlpwtG4JZKifLL_ZG-MJriQqWbCgrYB5Wxa_ozLPM"
                }
            });

            if (!response.ok) {
                throw new Error("HTTP ERROR");

            }
            let data = await response.json();
            setNews(data.articles)
            // console.log(data);

        }
        getData();
    }, []);


    if (!news) {
        return <h1>Loading {props.searchText}</h1>;

    }
    return (
        <>
            <h1 className="tittle">search Page</h1>

            <div className="container">
                {news.map((item) => {
                    return <Card key={item._id} title={item.title} desc={item.excerpt} image={item.media} />
                })}
            </div>

        </>
    );
};
export default SearchResults;