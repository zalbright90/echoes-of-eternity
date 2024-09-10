import './style.css';
import { initialLoad, loadBackgroundImage } from './scripts/initializer';
import createStartScreen from './scripts/createStartScreen';
import narrativeScreen from './scripts/story';

function initializeApp() {
    console.log('Initializing app');
    initialLoad();
    const content = document.getElementById('content');
    
    // Check if content is already loaded
    if (content.children.length === 0) {
        console.log('Loading content');

        function loadContent(moduleFunction) {
            console.log('loadContent called with:', moduleFunction.name);
            const element = moduleFunction();
            console.log('Created element:', element);
            content.appendChild(element);
            console.log('Content after append:', content.innerHTML);
        }
        
        loadContent(createStartScreen);
        
        const startButton = document.getElementById('startButton');
        startButton.addEventListener('click', startNarrative);
    } else {
        console.log('Content already loaded, skipping');
    }
}

function startNarrative() {
    console.log('Starting narrative');

    loadBackgroundImage(require('./images/convergence-the-omen.jpg'));

    const content = document.getElementById('content');
    content.innerHTML = '';

    // Load Narrative Content (story.js)
    narrativeScreen();

    // Add event listeners
    setupChoiceListeners();
}

function setupChoiceListeners() {
    const choiceButtons = document.querySelectorAll('.choice-button');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const choice = event.target.getAttribute('data-choice');
            handleChoice(choice);
        });
    });
}

/*function handleChoice(choice) {
    switch (choice) {
        case 'choiceOne'
        loadBackgroundImage(require('../images/.....'));
        console.log('User pushes through the crowd');
    }
}*/

// Run initialization once on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Handle hot module replacement
if (module.hot) {
    module.hot.accept(['./scripts/initializer.js', './scripts/createStartScreen'], () => {
        console.log('Hot module replacement triggered');
        const content = document.getElementById('content');
        content.innerHTML = '';
        initializeApp();
    });
}