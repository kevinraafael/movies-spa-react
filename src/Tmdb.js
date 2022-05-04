const API_KEY = `b08e208bca3aabde8e08ee5ca726c391`;
const API_BASE = `https://api.themoviedb.org/3`;

const basicFetch = async (endpoint) => {
    // const req = await fetch(`${API_BASE}${endpoint}`);
    const req = await fetch(endpoint)
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
                slug: 'Originais',
                title: 'Originais da Netlfix',
                items: await basicFetch('https://api.themoviedb.org/3/discover/tv?with_network=459&api_key=b08e208bca3aabde8e08ee5ca726c391&language=pt-BR'),
            },
            {
                slug: 'topRated',
                title: 'Ação',
                items: await basicFetch('https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=b08e208bca3aabde8e08ee5ca726c391&language=pt-BR'),
            },
            {

                slug: 'topBrazil',
                title: 'Drama',
                items: await basicFetch('https://api.themoviedb.org/3/discover/movie?with_genres=18&api_key=b08e208bca3aabde8e08ee5ca726c391&language=pt-BR'),
            },
            {

                slug: 'adventure',
                title: 'Aventura',
                items: await basicFetch('https://api.themoviedb.org/3/discover/movie?with_genres=12&api_key=b08e208bca3aabde8e08ee5ca726c391&language=pt-BR'),
            },
            {

                slug: 'animation',
                title: 'Animação',
                items: await basicFetch('https://api.themoviedb.org/3/discover/movie?with_genres=16&api_key=b08e208bca3aabde8e08ee5ca726c391&language=pt-BR'),
            }
        ]
        /*
        {
            "display_priority": 11,
            "logo_path": "/oBoWstXQFHAlPApyxIQ31CIbNQk.jpg",
            "provider_name": "Globoplay",
            "provider_id": 307
        },
        */
        // Para pegar generos de filme

    }
}