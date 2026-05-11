import './style.css';

const app = document.querySelector('#app');

let animeList = [];

const displayAnime = (animes) => {
    const animeContainer = document.querySelector('#anime-container');

    animeContainer.innerHTML = '';

    animes.forEach(anime => {
        animeContainer.innerHTML += `
            <div class="anime-card">
                <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
                <h2>${anime.title}</h2>
                <p>⭐ Score: ${anime.score}</p>
            </div>
        `;
    });
};

const fetchAnime = async () => {
    try {
        const response = await fetch('https://api.jikan.moe/v4/top/anime');

        const data = await response.json();

        animeList = data.data;

        app.innerHTML = `
            <h1>AnimeVerse</h1>

            <input 
                type="text" 
                id="search"
                placeholder="Zoek een anime..."
            >

            <div id="anime-container"></div>
        `;

        displayAnime(animeList);

        const searchInput = document.querySelector('#search');

        searchInput.addEventListener('input', () => {

            const searchValue = searchInput.value.toLowerCase();

            const filteredAnime = animeList.filter(anime =>
                anime.title.toLowerCase().includes(searchValue)
            );

            displayAnime(filteredAnime);
        });

    } catch (error) {
        console.error('Error:', error);
    }
};

fetchAnime();


