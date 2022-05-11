import React from "react";
import './index.css'

export default ({ item }) => {
    console.log(item);
    return (
        <section className="MainMovie" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`

        }}>
            <div className="GradientMovie">
                <div className="MainContainer">
                    <div className="FontsContainer">
                        <span className="TitleFont">
                            {item.title}
                        </span>
                        <span className="DescriptionFont">
                            {item.overview}
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}