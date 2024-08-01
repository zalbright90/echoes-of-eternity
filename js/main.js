document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    
    const navigateToCharacterCreation = () => {
        window.location.href = 'character.html';
    };

    startButton.addEventListener('click', navigateToCharacterCreation);
    startButton.addEventListener('touchend', (e) => {
        e.preventDefault();  // Prevent double-firing on touch devices
        navigateToCharacterCreation();
    });
});