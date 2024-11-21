import { createChoiceButtons, handleChoice, saveProgress, loadProgress } from "./story";
import { loadBackgroundImage } from "./initializer";

function loadChapterTwoTemple(choice) {
    loadBackgroundImage(require('../images/temple-mosaic.jpg'));

    const content = document.getElementById('content');
    content.innerHTML = '';

    const storyWrapper = document.createElement('div');
    storyWrapper.classList.add('screen');

    // Start of Chapter Two - Consult the Temple
    if (!choice) {
        const chapterTitle = document.createElement('h2');
        chapterTitle.classList.add('chapter-title');
        chapterTitle.textContent = 'Chapter 2: The Unveiled Prophecy';
        storyWrapper.appendChild(chapterTitle;)
    }
}