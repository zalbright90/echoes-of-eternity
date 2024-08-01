document.getElementById('character-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const playerName = document.getElementById('player-name').value;
    const playerClass = document.getElementById('player-class').value;

    const character = {
        name: playerName,
        class: playerClass
    };

    localStorage.setItem('character', JSON.stringify(character));

    window.location.href = 'game.html';
});