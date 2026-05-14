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

            <select id="score-filter">
            <select id="sort-anime">
    <option value="default">Sorteer</option>
    <option value="high-low">Hoogste score</option>
    <option value="low-high">Laagste score</option>
</select>



    <option value="all">Alle scores</option>
    <option value="high">Score hoger dan 8</option>
</select>






            <div id="anime-container"></div>
        `;

        displayAnime(animeList);

        const searchInput = document.querySelector('#search');

        searchInput.addEventListener('input', () => {



           const scoreFilter = document.querySelector('#score-filter');

scoreFilter.addEventListener('change', () => {

    if (scoreFilter.value === 'high') {

        const filteredAnime = animeList.filter(anime => anime.score > 8);

        displayAnime(filteredAnime);

    } else {

        displayAnime(animeList);

    }
});

const sortAnime = document.querySelector('#sort-anime');

sortAnime.addEventListener('change', () => {

    let sortedAnime = [...animeList];

    if (sortAnime.value === 'high-low') {

        sortedAnime.sort((a, b) => b.score - a.score);

    } else if (sortAnime.value === 'low-high') {

        sortedAnime.sort((a, b) => a.score - b.score);

    }

    displayAnime(sortedAnime);
});





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


