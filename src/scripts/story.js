function narrativeScreen() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const storyWrapper = document.createElement('div');
    storyWrapper.classList.add('screen');

    // Start of the story
    const actTitle = document.createElement('h1');
    actTitle.classList.add('title');
    actTitle.textContent = 'Act I: The Convergence Begins'
    storyWrapper.appendChild(actTitle);

    const sceneSetting = document.createElement('p');
    sceneSetting.classList.add('info');
    sceneSetting.textContent = 'The celestial convergence approaches, and strange phenomena occur throughout Varathis - A new country in the year is 2068, Earth is not how we know it constructed today after World War III';
    storyWrapper.appendChild(sceneSetting);

    const chapterTitle = document.createElement('h2');
    chapterTitle.classList.add('chapter-title');
    chapterTitle.textContent = 'Chapter 1: The Omen';
    storyWrapper.appendChild(chapterTitle);

    const sceneNarrative = document.createElement('p');
    sceneNarrative.classList.add('narrative');
    sceneNarrative.textContent = 'The air in Varathis crackled with an otherworldly energy as the celestial Convergence approached. You find yourself in the bustling market square of Aethoria, the City of a Thousand Spires. The normally vibrant atmosphere is tinged with an undercurrent of unease. As you weave through the crowd, you overhear whispered conversations about strange occurrences and inexplicable phenomena.  Suddenly, a commotion erupts near the central fountain. A group of people has gathered, pointing at the sky. You look up and see an extraordinary sight: three moons, each a different color, have appeared in the daylight sky.'
    storyWrapper.appendChild(sceneNarrative);

    const buttonSection = document.createElement('div');
    buttonSection.classList.add('button-section');
    
    const choiceButton = document.createElement('button');
    choiceButton.classList.add('choice-button');
    choiceButton.textContent = 'Push through';
    choiceButton.setAttribute('data-choice', 'choiceOne')

    buttonSection.appendChild(choiceButton);
    storyWrapper.appendChild(buttonSection);
    content.appendChild(storyWrapper);

    return storyWrapper;
}

export default narrativeScreen;