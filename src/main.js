import './style.css';

const animeContainer = document.querySelector('#app');

const fetchAnime = async () => {
    try {
        const response = await fetch('https://api.jikan.moe/v4/top/anime');

        const data = await response.json();

        console.log(data);

        animeContainer.innerHTML = `
            <h1>AnimeVerse</h1>
            <p>Top anime loaded successfully!</p>
        `;
    } catch (error) {
        console.error('Error fetching anime:', error);
    }
};

fetchAnime();

