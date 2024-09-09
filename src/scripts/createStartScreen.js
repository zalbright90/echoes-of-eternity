function createStartScreen() {

    const startScreen = document.createElement('div');
    startScreen.classList.add('start-screen');

    const gameTitle = document.createElement('h1');
    gameTitle.classList.add('title');
    gameTitle.textContent = 'Echoes of Eternity';
    startScreen.appendChild(gameTitle);

    const infoParagraph = document.createElement('p');
    infoParagraph.classList.add('info')
    infoParagraph.textContent = 'Welcome to the mystical realm of Echoes of Eternity! This Choice-driven adventure story will guide you through many mythologies and uncover the secrets of the past. Are you ready to embark on this extraordinary journey?';
    startScreen.appendChild(infoParagraph);

    const buttonSection = document.createElement('div');
    buttonSection.classList.add('button-section');

    const startButton = document.createElement('button');
    startButton.classList.add('start-button');
    startButton.textContent = 'Start your adventure!';
    buttonSection.appendChild(startButton);

    startScreen.appendChild(buttonSection);

    return startScreen;
}

export default createStartScreen;