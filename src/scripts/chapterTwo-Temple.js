import { createChoiceButtons, handleChoice, saveProgress, loadProgress } from "./story";
import { loadBackgroundImage } from "./initializer";
import { createAct, createTitle, createScene, createParagraph, createQuestion, createChoiceList, createVoiceEcho } from './storyUtils';

function loadChapterTwoTemple(choice) {
    loadBackgroundImage(require('../images/temple-mosaic.jpg'));

    const content = document.getElementById('content');
    content.innerHTML = '';

    const storyWrapper = document.createElement('div');
    storyWrapper.classList.add('screen');

    // Start of Chapter Two - Consult the Temple
    if (!choice) {
        storyWrapper.appendChild(createTitle('Chapter 2: The Unveiled Prophecy'));
    }
    content.appendChild(storyWrapper);
}

export default loadChapterTwoTemple;