import { createChoiceButtons, handleChoice } from './story';
import { loadBackgroundImage } from './initializer';

function loadChapterTwo(choice) {
    loadBackgroundImage(require('../images/elemental-figures.jpg'));

    const content = document.getElementById('content');
  content.innerHTML = '';

  const storyWrapper = document.createElement('div');
  storyWrapper.classList.add('screen');

  // Start of Chapter Two - Investigate Moons Pathway
  if (!choice) {
    const chapterTitle = document.createElement('h2');
    chapterTitle.classList.add('chapter-title');
    chapterTitle.textContent = 'Chapter 2: The Prophecy Unveiled';
    storyWrapper.appendChild(chapterTitle);

    const pathTitle = document.createElement('h3');
    pathTitle.classList.add('path-title');
    pathTitle.textContent = 'The Chosen Ones';
    storyWrapper.appendChild(pathTitle);

    const infoParagraph = document.createElement('p');
    infoParagraph.classList.add('info');
    infoParagraph.textContent = 'You, The Chosen One, have been chose to embark on a journey to the elemental realms. Through a combination of scholarly research, adventurous exploration, and mystical insight, you have gained the following knowledge so far:';
    storyWrapper.appendChild(infoParagraph);

    const knowledgeList = document.createElement('ul');
    knowledgeList.classList.add('knowledge-list');
    const knowledgeItems = [
        { text: "Ancient scrolls and texts reveal a prophecy about The Chosen One who will restore balance." },
        { text: "The realms are in peril due to an imbalance of power." },
        { text: "The moons play a crucial role in maintaining balance, but their power is waning." },
        { text: "There are others like you, marked by elements, who must unite to fulfill the prophecy, their choices also led them to this point!"}
    ];
    knowledgeItems.forEach(item => {
        const knowledgeItem = document.createElement('li');
        knowledgeItem.textContent = item.text;
        knowledgeList.appendChild(knowledgeItem);
    });
    storyWrapper.appendChild(knowledgeList);

    const sceneNarrative = document.createElement('p');
    sceneNarrative.classList.add('narrative');
    sceneNarrative.textContent = 'The vision of the three intertwining branches - flame, droplet, and leaf - remains seared in your mind as you make your way through the crowded streets of Aethoria. The voice echoes in your thoughts: "Seeker, the balance is broken. The Elemental Realms cry out for restoration.';
    storyWrapper.appendChild(sceneNarrative);

    const sceneContinue = document.createElement('p');
    sceneContinue.classList.add('narrative');
    sceneContinue.textContent = 'As you ponder the meaning of these words, you notice that the crowds are all moving in one direction - towards the Grand Temple of Elements. The normally pristine white marble of the temple seems to shimmer with an array of colors, reflecting the hues of the three moons still visible in the sky.';
    storyWrapper.appendChild(sceneContinue);

    const sceneConclusion = document.createElement('p');
    sceneConclusion.classList.add('narrative');
    sceneConclusion.textContent = 'At the temple steps, three figures stand, each emanating an aura that corresponds to one of the elemental symbols you saw in your vision.';
    storyWrapper.appendChild(sceneConclusion);
    
    const choiceQuestion = document.createElement('p');
    choiceQuestion.classList.add('choice-section');
    choiceQuestion.textContent = 'What do you do?';
    storyWrapper.appendChild(choiceQuestion);

    const choiceList = document.createElement('ol');
    choiceList.className = 'choice-list';
    const choices = [
        { text: "Approach the figure wreathed in flames." },
        { text: "Seek out the individual surrounded by a misty aura" },
        { text: "Move towards the person with vines and leaves swirling around them" }
    ];
    choices.forEach(item => {
        const choice = document.createElement('li');
        choice.textContent = item.text;
        choiceList.appendChild(choices);
    });
    storyWrapper.appendChild(choiceList);

    createChoiceButtons(choices, storyWrapper);
  } else {
    switch (choice) {
        case 'flameGuardian':
            loadFlameGuardian();
            break;
        case 'mistQeaver':
            loadMistWeaver();
            break;
        case 'earthShaper':
            loadEarthShaper();
            break;
    }
  }
  content.appendChild(storyWrapper);
}

// Flame Guardian Choice