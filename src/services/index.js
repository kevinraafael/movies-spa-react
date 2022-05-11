const API_KEY = `b08e208bca3aabde8e08ee5ca726c391`;
const API_BASE = `https://api.themoviedb.org/3`;

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    //const req = await fetch(endpoint)
    const json = await req.json();
    return json;
}

/*
Trazer Generos
https://api.themoviedb.org/3/genre/movie/list?api_key=b08e208bca3aabde8e08ee5ca726c391&language=pt-BR
*/

export default {
    getHomeList: async () => {
        return [

            {
                slug: `topRated`,
                title: `Ação`,
                items: await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}&language=pt-BR`),
            },
            {
                slug: `seriados`,
                title: `Séries & Tv`,
                items: await basicFetch(`/discover/tv?with_network=459&api_key=${API_KEY}&language=pt-BR`),
            },

            {

                slug: `topBrazil`,
                title: `Drama`,
                items: await basicFetch(`/discover/movie?with_genres=18&api_key=${API_KEY}&language=pt-BR`),
            },
            {

                slug: `adventure`,
                title: `Aventura`,
                items: await basicFetch(`/discover/movie?with_genres=12&api_key=${API_KEY}&language=pt-BR`),
            },
            {

                slug: `animation`,
                title: `Animação`,
                items: await basicFetch(`/discover/movie?with_genres=16&api_key=${API_KEY}&language=pt-BR`),
            }
        ]

    },
    getMovieInfo: async (movieId, type) => {
        let movieInfo = {};

        if (movieId)
            switch (type) {
                case `movie`:
                    movieInfo = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                case `tv`:
                    movieInfo = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                default:
                    movieInfo = 'Não encontrado';

            }
        return movieInfo;
    }

}