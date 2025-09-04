// Sample game data (replace with your actual games)
const games = [
    { title: "Super Mario Bros", type: "retro", image: "https://via.placeholder.com/250x150?text=Super+Mario+Bros" },
    { title: "Pac-Man", type: "retro", image: "https://via.placeholder.com/250x150?text=Pac-Man" },
    { title: "Tetris", type: "retro", image: "https://via.placeholder.com/250x150?text=Tetris" },
    { title: "Club Penguin", type: "flash", image: "https://via.placeholder.com/250x150?text=Club+Penguin" },
    { title: "Bloons Tower Defense", type: "flash", image: "https://via.placeholder.com/250x150?text=Bloons+Tower+Defense" },
    { title: "Run 3", type: "flash", image: "https://via.placeholder.com/250x150?text=Run+3" },
];

// DOM Elements
const gamesGrid = document.getElementById("games-grid");
const searchBar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-button");
const navItems = document.querySelectorAll("nav ul li");

// Load games
function loadGames(filter = "all") {
    gamesGrid.innerHTML = "";
    const filteredGames = filter === "all" ? games : games.filter(game => game.type === filter);

    filteredGames.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.className = "game-card";
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
        `;
        gameCard.addEventListener("click", () => loadGame(game));
        gamesGrid.appendChild(gameCard);
    });
}

// Load a game (placeholder for Ruffle/EmulatorJS)
function loadGame(game) {
    alert(`Loading ${game.title}... (This is a placeholder. Integrate Ruffle or EmulatorJS here.)`);
}

// Search functionality
searchButton.addEventListener("click", () => {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredGames = games.filter(game => game.title.toLowerCase().includes(searchTerm));
    gamesGrid.innerHTML = "";
    filteredGames.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.className = "game-card";
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
        `;
        gameCard.addEventListener("click", () => loadGame(game));
        gamesGrid.appendChild(gameCard);
    });
});

// Navigation filter
navItems.forEach(item => {
    item.addEventListener("click", () => {
        navItems.forEach(navItem => navItem.classList.remove("active"));
        item.classList.add("active");
        loadGames(item.getAttribute("data-filter"));
    });
});

// Initialize
loadGames();
