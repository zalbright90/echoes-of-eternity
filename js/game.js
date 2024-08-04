import { getCurrentChapter, progressStory, generateOptions } from './story.js';

function updateGame(decision = null) {
    let chapter;
    if (decision) {
        chapter = progressStory(decision);
    } else {
        chapter = getCurrentChapter;
    }

    document.getElementById('storyOutput').textContent = chapter.text

    const options = generateOptions();
    const playerOptions = document.getElementById('playerOptions');
    playerOptions.innerHTML = options.map(option => `<button class="option-button">${option}</button>`).join('');
}

document.getElementById('playerOptions').addEventListener('click', function(event) {
    if (event.target.classList.contains('option-button')) {
        updateGame(event.target.textContent);
    }
});

updateGame();