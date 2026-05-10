import './style.css';

const app = document.querySelector('#app');

const fetchAnime = async () => {
    try {
        const response = await fetch('https://api.jikan.moe/v4/top/anime');

        const data = await response.json();

        const animeList = data.data;

        app.innerHTML = `
            <h1>AnimeVerse</h1>
            <div id="anime-container"></div>
        `;

        const animeContainer = document.querySelector('#anime-container');

        animeList.forEach(anime => {
            animeContainer.innerHTML += `
                <div class="anime-card">
                    <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
                    <h2>${anime.title}</h2>
                    <p>⭐ Score: ${anime.score}</p>
                </div>
            `;
        });

    } catch (error) {
        console.error('Error:', error);
    }
};

fetchAnime();


