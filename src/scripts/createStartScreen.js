import { loadProgress } from './story';

function createStartScreen() {

    const startScreen = document.createElement('div');
    startScreen.classList.add('screen');

    const storyTitle = document.createElement('h1');
    storyTitle.classList.add('title');
    storyTitle.textContent = 'Echoes of Eternity';
    startScreen.appendChild(storyTitle);

    const infoParagraph = document.createElement('p');
    infoParagraph.classList.add('info')
    infoParagraph.textContent = 'Welcome to the mystical realm of Echoes of Eternity! This Choice-driven adventure story will guide you through many mythologies and uncover the secrets of the past. Are you ready to embark on this extraordinary journey?';
    startScreen.appendChild(infoParagraph);

    const buttonSection = document.createElement('div');
    buttonSection.classList.add('button-section');

    const startButton = document.createElement('button');
    startButton.classList.add('start-button');
    startButton.id = 'startButton';
    startButton.textContent = 'Start your adventure!';
    buttonSection.appendChild(startButton);

    startScreen.appendChild(buttonSection);

    return startScreen;
}

export default createStartScreen;