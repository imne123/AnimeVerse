import './style.css';

document.querySelector('#app').innerHTML = `
    <header>
        <h1>AnimeVerse</h1>
    </header>

    <main>
        <section class="controls">
            <input type="text" placeholder="Search anime...">
        </section>

        <section id="anime-container"></section>
    </main>
`;

console.log('AnimeVerse loaded');

