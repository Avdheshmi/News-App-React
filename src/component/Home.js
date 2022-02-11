import React, { useEffect, useState } from "react";
import Card from "./Card";

const Home = () => {
    const [news , setNews] = useState(null);
    useEffect(() => {
        let getData = async () => {
            let response = await fetch("https://api.newscatcherapi.com/v2/latest_headlines?countries=IN&page_size=40&lang=hi&when=24h", {
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
            console.log(data);

        }
        getData();
    }, []);


    if (!news){
      return  <h1>Loading</h1>;
    }
    return (
        <>
            <h1 className="tittle">Home Page</h1>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ex dicta velit optio, quas amet. Atque maiores, repellat ratione reprehenderit, voluptatibus ea sunt minus assumenda incidunt, deserunt rem dolores saepe.</p> */}
            {/* {news.map((item)=>{
                return <h2 key={item._id}>{item.title}</h2>
                
            })} */}

            {/* <h1>{news && news[0].title}</h1> */}
            <div className="container">
            {news.map((item)=>{
                return <Card key={item._id} title={item.title} desc={item.excerpt} image={item.media}/>
            })}
            </div>

        </>
    );
};
export default Home;


