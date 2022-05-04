import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
export default () => {

  const [movieList, setMovieList] = useState([]); // Salvar a lista com useState

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();

      setMovieList(list);

    }
    loadAll();
  }, [])

  return (
    <div className="mainPage">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow title={item.title} items={item.items} key={key} />
        ))}
      </section>
    </div>
  )
}