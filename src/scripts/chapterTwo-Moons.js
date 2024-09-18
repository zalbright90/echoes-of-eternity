import { createChoiceButtons, handleChoice } from './story';
import { loadBackgroundImage } from './initializer';

function loadChapterTwoMoons(choice) {
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

    const sceneNarrative = document.createElement('p');
    sceneNarrative.classList.add('narrative');
    sceneNarrative.textContent = 'As you make your way through the streets of Aethoria, the visions and symbols from before still burn in your mind. The voice—deep, ancient—whispers again:';
    storyWrapper.appendChild(sceneNarrative);

    const voiceEcho = document.createElement('em');
    voiceEcho.classList.add('voice-echo');
    voiceEcho.textContent = '"Seeker, the Elemental Realms cry out for restoration. The path you choose will shape the future."';
    storyWrapper.appendChild(voiceEcho);

    const sceneContinue = document.createElement('p');
    sceneContinue.classList.add('narrative');
    sceneContinue.textContent = 'As you ponder the meaning of these words, you notice that the crowds are all moving in one direction - towards the Grand Temple of Elements. The normally pristine white marble of the temple seems to shimmer with an array of colors, reflecting the hues of the three moons still visible in the sky. Your symbol pulses, and you feel it pulling you toward the temple steps.';
    storyWrapper.appendChild(sceneContinue);

    const sceneConclusion = document.createElement('p');
    sceneConclusion.classList.add('narrative');
    sceneConclusion.textContent = 'Three figures stand at the entrance, each radiating an energy that corresponds to the elements of your vision. Their presence is undeniable, and you realize these figures hold the answers you seek—but which one will guide you?';
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
    storyWrapper.appendChild(choiceList);

    createChoiceButtons(choices, storyWrapper);
  } else {
    switch (choice) {
        case 'flameGuardian':
            loadFlameGuardian();
            break;
        case 'mistWeaver':
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
export function loadFlameGuardian() {
    loadBackgroundImage(require('../images/flame-guardian.jpg'));
}

export default loadChapterTwoMoons;