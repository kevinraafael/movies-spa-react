import React, { useEffect, useState } from "react";
import Tmdb from "./services";
import MovieRow from "./components/MovieRow";
import './App.css';
import MainMovie from "./components/MainMovie";
export default () => {

  const [movieList, setMovieList] = useState([]); // Salvar a lista com useState
  const [mainMovieData, setMainMovieData] = useState([]);
  useEffect(() => {
    const loadAll = async () => {
      //Pegar toda a lista
      let list = await Tmdb.getHomeList();

      setMovieList(list);
      //Pegar o filme principal
      let principalMovies = list.filter(i => i.slug === 'Originais');
      //Gera um numero aleatorio de acordo com tamanho do array da categoria de originais
      // let randomNumber = Math.floor(Math.random() * (principalMovies[0].items.results.length - 1));
      let choseMovie = principalMovies[0].items.results[13];
      let chosedMovieCompleteInfo = await Tmdb.getMovieInfo(choseMovie.id, 'tv');
      setMainMovieData(chosedMovieCompleteInfo);
      console.log(chosedMovieCompleteInfo);

    }
    loadAll();
  }, [])

  return (
    <div className="mainPage">
      {
        mainMovieData &&
        <MainMovie item={mainMovieData} />
      }
      <MainMovie />
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow title={item.title} items={item.items} key={key} />
        ))}
      </section>
    </div>
  )
}