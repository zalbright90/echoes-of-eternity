import { createChoiceButtons, handleChoice } from './story';
import { loadBackgroundImage } from './initializer';

function loadChapterOne(choice) {
    const content = document.getElementById('content');
  content.innerHTML = '';

    const storyWrapper = document.createElement('div');
  storyWrapper.classList.add('screen');

  // Start of the story
    if (!choice) {
        const actTitle = document.createElement('h1');
        actTitle.classList.add('title');
        actTitle.textContent = 'Act I: The Convergence Begins';
        storyWrapper.appendChild(actTitle);

        const sceneSetting = document.createElement('p');
        sceneSetting.classList.add('info');
        sceneSetting.textContent = 'As the celestial convergence draws near, strange phenomena begin to unfold across Varathis—a newly formed nation in the year 2068. In a world reshaped by the aftermath of World War III, Earth is no longer as we know it, and the fabric of reality itself seems to fray at the edges.';
        storyWrapper.appendChild(sceneSetting);

        const chapterTitle = document.createElement('h2');
        chapterTitle.classList.add('chapter-title');
        chapterTitle.textContent = 'Chapter 1: The Omen';
        storyWrapper.appendChild(chapterTitle);

        const sceneNarrative = document.createElement('p');
        sceneNarrative.classList.add('narrative');
        sceneNarrative.textContent = 'The air in Varathis crackled with an otherworldly energy as the celestial Convergence approached. You find yourself in the bustling market square of Aethoria, the City of a Thousand Spires. The normally vibrant atmosphere is tinged with an undercurrent of unease. As you weave through the crowd, you overhear whispered conversations about strange occurrences and inexplicable phenomena. Suddenly, a commotion erupts near the central fountain. A group of people has gathered, pointing at the sky. You look up and see an extraordinary sight: three moons, each a different color, have appeared in the daylight sky.';
        storyWrapper.appendChild(sceneNarrative);

        const choiceQuestion = document.createElement('p');
        choiceQuestion.classList.add('choice-section');
        choiceQuestion.textContent = 'What do you do?';
        storyWrapper.appendChild(choiceQuestion);

        const choiceList = document.createElement('ol');
        choiceList.className = 'choice-list';

        const firstChoice = document.createElement('li');
        firstChoice.textContent = 'Push through the crowd to get a closer look at the moons.';
        choiceList.appendChild(firstChoice);

        const secondChoice = document.createElement('li');
        secondChoice.textContent = 'Seek out a local Elder to understand the meaning of this event.';
        choiceList.appendChild(secondChoice);

        const thirdChoice = document.createElement('li');
        thirdChoice.textContent = 'Head to the nearest temple to consult with the priests.';
        choiceList.appendChild(thirdChoice);

        storyWrapper.appendChild(choiceList);

        const choices = [
            { text: 'Investigate the Moons', value: 'investigateMoons' },
            { text: 'Seek Elder', value: 'seekElder' },
            { text: 'Visit temple', value: 'visitTemple' }
        ];
        createChoiceButtons(choices, storyWrapper);
    } else {
        switch (choice) {
            case 'investigateMoons':
                loadInvestigateMoons();
                break;
            case 'seekElder':
                loadSeekElder();
                break;
            case 'visitTemple':
                loadVisitTemple();
                break;
        }
    }

  content.appendChild(storyWrapper);
}

export function loadInvestigateMoons() {
    loadBackgroundImage(require('../images/investigate-moons.jpg'));
  
    const content = document.getElementById('content');
    content.innerHTML = '';
  
    const storyWrapper = document.createElement('div');
    storyWrapper.classList.add('screen');
    
    const chapterTitle = document.createElement('h2');
    chapterTitle.classList.add('chapter-title');
    chapterTitle.textContent = 'Choice 1: Investiagate the Moons';
    storyWrapper.appendChild(chapterTitle);
  
    const sceneNarrative = document.createElement('p');
    sceneNarrative.classList.add('narrative');
    sceneNarrative.textContent = 'You push your way through the throng of onlookers, determined to get a better view. As you reach the front, you notice that the moons are slowly aligning, forming a perfect triangle in the sky. The sight is both beautiful and terrifying. An old woman next to you gasps, "The Triad of Fate! It is just as the ancient scrolls foretold!" Before you can ask her what she means, a blinding light erupts from the center of the triangle, bathing the entire city in an ethereal glow. As the light fades, you notice that small, glowing symbols have appeared on the back of your hand.';
    storyWrapper.appendChild(sceneNarrative);
  
    const choiceQuestion = document.createElement('p');
    choiceQuestion.classList.add('choice-section');
    choiceQuestion.textContent = 'What do you do?';
    storyWrapper.appendChild(choiceQuestion);
  
    const choiceList = document.createElement('ol');
    choiceList.className = 'choice-list';
  
    const firstChoice = document.createElement('li');
    firstChoice.textContent = 'Examine the symbol on your hand more closely.';
    choiceList.appendChild(firstChoice);
  
    const secondChoice = document.createElement('li');
    secondChoice.textContent = 'Ask the old woman about the Triad of Fate and the ancient scrolls.';
    choiceList.appendChild(secondChoice);
  
    const thirdChoice = document.createElement('li');
    thirdChoice.textContent = 'Look around to see if others have similar markings.';
    choiceList.appendChild(thirdChoice);
  
    storyWrapper.appendChild(choiceList);
  
    const choices = [
        { text: 'Investigate symbols', value: 'investigateSymbols' },
        { text: 'Ask about Triad of Fate', value: 'triadFate' },
        { text: 'Look for others', value: 'lookAround' }
    ];
  
    createChoiceButtons(choices, storyWrapper);
    content.appendChild(storyWrapper);
}

export function loadInvestigateSymbols() {
  loadBackgroundImage(require('../images/investigate-symbols.jpg'));

  const content = document.getElementById('content');
  content.innerHTML = '';

  const storyWrapper = document.createElement('div');
  storyWrapper.classList.add('screen');

  const chapterTitle = document.createElement('h2');
  chapterTitle.classList.add('chapter-title');
  chapterTitle.textContent = 'Examine the symbol on your hand more closely.';
  storyWrapper.appendChild(chapterTitle);

  const infoParagraph = document.createElement('p');
  infoParagraph.classList.add('info');
  infoParagraph.textContent = 'After witnessing the extraordinary sight of the three moons in the sky and the blinding light that bathed the city, you notice a glowing symbol on your hand.';
  storyWrapper.appendChild(infoParagraph);

  const sceneNarrative = document.createElement('p');
  sceneNarrative.classList.add('narrative');
  sceneNarrative.textContent = 'As you bring your hand closer to your face, the symbol begins to glow more intensely. It is an intricate design, reminiscent of a tree with three intertwining branches. Each branch ends in a different symbol: A flame, a droplet, and a leaf. Suddenly, you feel a surge of energy coursing through your body. Your vision blurs, and you find yourself experiencing a series of rapid visions:';
  storyWrapper.appendChild(sceneNarrative);

  const visionList = document.createElement('ul');
  visionList.classList.add('choice-list');

  const visionOne = document.createElement('li');
  visionOne.textContent = 'A snow-capped mountain split by a chasm of fire.';
  visionList.appendChild(visionOne);

  const visionTwo = document.createElement('li');
  visionTwo.textContent = 'A lush forest withering under an unnatural drought.';
  visionList.appendChild(visionTwo);

  const visionThree = document.createElement('li');
  visionThree.textContent = 'A great flood threatening to submerge an ancient city.';
  visionList.appendChild(visionThree);

  storyWrapper.appendChild(visionList);

  const sceneContinue = document.createElement('p');
  sceneContinue.classList.add('narrative');
  sceneContinue.textContent = 'As the visions fade, you hear a voice echoing in your mind:';
  storyWrapper.appendChild(sceneContinue);

  const voiceEcho = document.createElement('em');
  voiceEcho.textContent = ' "Seeker, the balance is broken. The Elemental Realms cry out for restoration."';
  voiceEcho.classList.add('voice-echo');
  storyWrapper.appendChild(voiceEcho);

  // Add button and logic to go to chapter 2 based on investigating moons

  content.appendChild(storyWrapper);
}


  
export function loadSeekElder() {
    loadBackgroundImage(require('../images/seek-elders.jpg'));
  
    const content = document.getElementById('content');
    content.innerHTML = '';
  
    const storyWrapper = document.createElement('div');
    storyWrapper.classList.add('screen');
  
    const chapterTitle = document.createElement('h2');
    chapterTitle.classList.add('chapter-title');
    chapterTitle.textContent = 'Choice 2: Seek an Elder';
    storyWrapper.appendChild(chapterTitle);
  
    const sceneNarrative = document.createElement('p');
    sceneNarrative.classList.add('narrative');
    sceneNarrative.textContent = 'You decide that knowledge is your best ally in this strange situation. You make your way to the Grand Library of Aethoria, a massive structure said to house knowledge from across all realms.  As you approach the entrance, you notice that the usually calm scholars are in a state of frenzy, rushing about with armfuls of scrolls and ancient tomes. You manage to catch the attention of Magister Elowen, a respected expert in celestial phenomena. "Ah, a seeker of knowledge in these tumultuous times," she says, her eyes gleaming with a mix of excitement and concern. "You have come at a most auspicious moment. The Convergence is upon us, and with it, the awakening of ancient powers."';
    storyWrapper.appendChild(sceneNarrative);
  
    const choiceQuestion = document.createElement('p');
    choiceQuestion.classList.add('choice-section');
    choiceQuestion.textContent = 'How do you respond?';
    storyWrapper.appendChild(choiceQuestion);
  
    const choiceList = document.createElement('ol');
    choiceList.className = 'choice-list';
  
    const firstChoice = document.createElement('li');
    firstChoice.textContent = 'Ask about the Convergence and its signifigance.';
    choiceList.appendChild(firstChoice);
  
    const secondChoice = document.createElement('li');
    secondChoice.textContent = 'Inquire about the "Awakening of ancient powers" she mentioned.';
    choiceList.appendChild(secondChoice);
  
    const thirdChoice = document.createElement('li');
    thirdChoice.textContent = 'Request to see any relevant texts or prophecies.';
    choiceList.appendChild(thirdChoice);
  
    storyWrapper.appendChild(choiceList);
  
    const choices = [
      { text: 'Convergence?', value: 'aboutConvergence' },
      { text: 'Awakening of ancient powers?', value: 'awakeningPowers' },
      { text: 'Texts or prophecies?', value: 'textsProphecies' }
    ];
  
    createChoiceButtons(choices, storyWrapper);
    content.appendChild(storyWrapper);
  
    return storyWrapper;
}
  
export function loadVisitTemple() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    
    const storyWrapper = document.createElement('div');
    storyWrapper.classList.add('screen');

    const chapterTitle = document.createElement('h2');
    chapterTitle.classList.add('chapter-title');
    chapterTitle.textContent = 'Choice 3: Visit the Temple';
    storyWrapper.appendChild(chapterTitle);

    const sceneNarrative = document.createElement('p');
    sceneNarrative.classList.add('narrative');
    sceneNarrative.textContent = 'You make your way to the Temple of the Cosmic Wheel, the most revered spiritual site in Aethoria. As you climb the marble steps, you notice that the normally serene atmosphere is charged with tension. Priests and acolytes rush about, their robes billowing behind them.  High Priestess Selena greets you at the entrance, her silver hair shimmering in the strange light cast by the three moons. "Welcome, child of Varathis," she intones, her voice resonating with power. "You have been drawn here by the call of destiny."  She gestures for you to follow her into the inner sanctum, where a massive mosaic depicts the cosmic wheel surrounded by various mythological figures from across the realms.';
    storyWrapper.appendChild(sceneNarrative);

    const choiceQuestion = document.createElement('p');
    choiceQuestion.classList.add('choice-section');
    choiceQuestion.textContent = 'What do you wish to know?';
    storyWrapper.appendChild(choiceQuestion);

    const choiceList = document.createElement('ol');
    choiceList.className = 'choice-list';

    const firstChoice = document.createElement('li');
    firstChoice.textContent = 'Ask about the meaning of the three moons in the sky.';
    choiceList.appendChild(firstChoice);

    const secondChoice = document.createElement('li');
    secondChoice.textContent = 'Inquire about your role in this "destiny" she mentioned.';
    choiceList.appendChild(secondChoice);

    const thirdChoice = document.createElement('li');
    thirdChoice.textContent = 'Request guidance on what actions you should take next,';
    choiceList.appendChild(thirdChoice);

    storyWrapper.appendChild(choiceList);

    const choices = [
      { text: 'Moons?', value:'moons' },
      { text: 'Role in destiny?', value: 'roleDestiny' },
      { text: 'Next steps?', value: 'nextSteps' }
    ];
    createChoiceButtons(choices, storyWrapper);
    content.appendChild(storyWrapper);
}

  export default loadChapterOne;
