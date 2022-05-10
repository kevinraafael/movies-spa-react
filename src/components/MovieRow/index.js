import React from "react";
import './index.css';

export default ({ title, items }) => {
    return (
        <div className="moveiRow">
            <h2>
                {title}
            </h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

/*
Necessária duas divs para fazer a listinha percorrer
uma terá a área total
e a outra terá todos os itens
*/