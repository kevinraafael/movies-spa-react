import React, { useEffect, useState } from "react";
import Tmdb from "./services";
import MovieRow from "./components/MovieRow";
import './App.css';
import MainMovie from "./components/MainMovie";
export default () => {

  const [movieList, setMovieList] = useState([]); // Salvar a lista com useState
  const [mainMovieData, setMainMovieData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      //Pegar toda a lista
      let list = await Tmdb.getHomeList();

      setMovieList(list);
      //Pegar o filme principal

      let principalMovies = list.filter(i => i.slug === 'topRated');
      //Gera um numero aleatorio de acordo com tamanho do array da categoria de originais
      let randomNumber = Math.floor(Math.random() * (principalMovies[0].items.results.length - 1));
      let choseMovie = principalMovies[0].items.results[randomNumber];
      let chosedMovieCompleteInfo = await Tmdb.getMovieInfo(choseMovie.id, 'movie');
      setMainMovieData(chosedMovieCompleteInfo)


    }
    loadAll();
  }, [])

  return (
    <div className="mainPage">

      {
        mainMovieData != null ?
          <MainMovie item={mainMovieData} />
          : ' ...Carregando'

      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow title={item.title} items={item.items} key={key} />
        ))}
      </section>
    </div>
  )
}