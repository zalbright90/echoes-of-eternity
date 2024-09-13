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

// Choice 1 Pathway
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
// Choice 1 Pathway choices
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

export function loadTriadFate() {
  loadBackgroundImage(require('../images/old-woman.jpg'));

  const content = document.getElementById('content');
  content.innerHTML = '';

  const storyWrapper = document.createElement('div');
  storyWrapper.classList.add('screen');

  const chapterTitle = document.createElement('h2');
  chapterTitle.classList.add('chapter-title');
  chapterTitle.textContent = 'Ask the old woman about the Triad of Fate and ancient scrolls';
  storyWrapper.appendChild(chapterTitle);

  const infoParagraph = document.createElement('p');
  infoParagraph.classList.add('info');
  infoParagraph.textContent = 'After witnessing the extraordinary sight of the three moons in the sky and the blinding light that bathed the city, you notice a glowing symbol on your hand.';
  storyWrapper.appendChild(infoParagraph);

  const sceneNarrative = document.createElement('p');
  sceneNarrative.classList.add('narrative');
  sceneNarrative.textContent = 'You turn to the old woman who gasped about the Triad of Fate. Her eyes, milky with age, seem to look through you rather than at you. "The Triad of Fate," she begins, her voice quavering with excitement, "is the convergence of the three cosmic forces: Time, Life, and Space.';
  storyWrapper.appendChild(sceneNarrative);

  const sceneContinue = document.createElement('p');
  sceneContinue.classList.add('narrative');
  sceneContinue.textContent = 'The ancient scrolls speak of a time when these forces would manifest as three moons in the sky, heralding the awakening of the Lost Relics." She grabs your arm with suprising strength.';
  storyWrapper.appendChild(sceneContinue);

  const voiceEcho = document.createElement('em');
  voiceEcho.classList.add('voice-echo');
  voiceEcho.textContent = '"The scrolls also speak of chosen ones, marked by elements, who must restore balance to the realms. The fate of all existence hangs in the balance!"';
  storyWrapper.appendChild(voiceEcho);

  // Logic to go to chapter 2 from Investigate Moons

  content.appendChild(storyWrapper);
}

export function loadLookAround() {
  loadBackgroundImage(require('../images/elemental-symbol.jpg'));

  const content = document.getElementById('content');
  content.innerHTML = '';

  const storyWrapper = document.createElement('div');
  storyWrapper.classList.add('screen');

  const chapterTitle = document.createElement('h2');
  chapterTitle.classList.add('chapter-title');
  chapterTitle.textContent = 'Look around to see if others have similar markings';
  storyWrapper.appendChild(chapterTitle);

  const infoParagraph = document.createElement('p');
  infoParagraph.classList.add('info');
  infoParagraph.textContent = 'After witnessing the extraordinary sight of the three moons in the sky and the blinding light that bathed the city, you notice a glowing symbol on your hand.';
  storyWrapper.appendChild(infoParagraph);

  const sceneNarrative = document.createElement('p');
  sceneNarrative.classList.add('narrative');
  sceneNarrative.textContent = 'As you scan the crowd, looking for any signs of symbols or markings on others. At first, you see nothing out of the ordinary.  You notice three individuals in the crowd who seem different. A young woman stares at her palm, where a flame-like symbol glows. A middle-aged man in scholarly robes traces a water droplet marking on the back of his hand. An elderly person in simple garb holds up their arm, revealing a leaf-shaped symbol.';
  storyWrapper.appendChild(sceneNarrative);

  const sceneContinue = document.createElement('p');
  sceneContinue.classList.add('narrative');
  sceneContinue.textContent = 'As you notice them, they seem to become aware of you too. Your eyes meet, and you feel an inexplicable connection, as if you are all part of something greater than yourselves.';
  storyWrapper.appendChild(sceneContinue);

  // Add logic to go to Chapter 2 from investigating moons

  content.appendChild(storyWrapper);
}

// Choice 2 Pathway
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

// Choice 2 Pathway choices
export function loadAboutConvergence() {
  loadBackgroundImage(require('../images/large-ornate-book.jpg'));
  const content = document.getElementById('content');
  content.innerHTML = '';

  const storyWrapper = document.createElement('div');
  storyWrapper.classList.add('screen');

  const chapterTitle = document.createElement('h2');
  chapterTitle.classList.add('chapter-title');
  chapterTitle.textContent = 'Ask about the Convergence and its significance';
  storyWrapper.appendChild(chapterTitle);

  const infoParagraph = document.createElement('p');
  infoParagraph.classList.add('info');
  infoParagraph.textContent = 'You have decided that knowledge is your best ally in this strange situation. And have made your way to the dwelling of Magister Elowen, a respected elder known for her wisdom and knowledge of celestial phenomena.';
  storyWrapper.appendChild(infoParagraph);

  const sceneNarrative = document.createElement('p');
  sceneNarrative.classList.add('narrative');
  sceneNarrative.textContent = 'Magister Elowens eyes light up at your question. She pulls a large, ornate book from a nearby shelf and opens it to reveal a complex diagram of celestial bodies. "The Convergence," she explains, "is a cosmic event that occurs once every thousand years. It is a time when the barriers between realms thin, allowing for the flow of energies and, sometimes, beings between worlds."';
  storyWrapper.appendChild(sceneNarrative);

  const sceneContinue = document.createElement('p');
  sceneContinue.classList.add('narrative');
  sceneContinue.textContent = 'She points to various parts of the diagram as she continues, "This particular Convergence is special. The alignment of the three moons you see in the sky represents the culmination of a cycle that spans multiple convergences. It heralds a time of great change and potential." Elowen pauses, her expression growing serious.';
  storyWrapper.appendChild(sceneContinue);

  const voiceEcho = document.createElement('em');
  voiceEcho.classList.add('voice-echo');
  voiceEcho.textContent = '"But with great potential comes great danger. The last time such an alignment occurred, it led to the Age of Chaos, a period of strife that nearly tore the fabric of reality apart."';
  storyWrapper.appendChild(voiceEcho);

  // Add logic to go to Chapter 2 from Seek Elder

  content.appendChild(storyWrapper);
}

export function loadAwakeningPowers() {
  loadBackgroundImage(require('../images/small-ornate-box.jpg'));

  const content = document.getElementById('content');
  content.innerHTML = '';

  const storyWrapper = document.createElement('div');
  storyWrapper.classList.add('screen');

  const chapterTitle = document.createElement('h2');
  chapterTitle.classList.add('chapter-title');
  chapterTitle.textContent = 'Inquire about the "awakening of ancient powers" she mentioned';
  storyWrapper.appendChild(chapterTitle);

  const infoParagraph = document.createElement('p');
  infoParagraph.classList.add('info');
  infoParagraph.textContent = 'You have decided that knowledge is your best ally in this strange situation. And have made your way to the dwelling of Magister Elowen, a respected elder known for her wisdom and knowledge of celestial phenomena.';
  storyWrapper.appendChild(infoParagraph);

  const sceneNarrative = document.createElement('p');
  sceneNarrative.classList.add('narrative');
  sceneNarrative.textContent = 'Magister Elowens expression becomes grave. She walks to a locked cabinet and retrieves a small, ornate box. Opening it, she reveals three small objects: a miniature crown, a tiny chalice, and a minuscule book.';
  storyWrapper.appendChild(sceneNarrative);

  const sceneContinue = document.createElement('p');
  sceneContinue.classList.add('narrative');
  sceneContinue.textContent = '"These are replicas of the Lost Relics," she explains. "The Crown of Eternity, the Chalice of Souls, and the Codex of Realms. Each holds power over a fundamental aspect of existence: Time, Life, and Space." She closes the box carefully.';
  storyWrapper.appendChild(sceneContinue);

  const voiceEcho = document.createElement('em');
  voiceEcho.classList.add('voice-echo');
  voiceEcho.textContent = '"The Convergence weakens the barriers that have kept these relics hidden for millennia. Their power will soon awaken, and they must be found and united by those chosen to bear them. If they fall into the wrong hands, or if they are not brought together in time, the consequences could be catastrophic."';
  storyWrapper.appendChild(voiceEcho);

  // Add logic to go to Chapter 2 from Seek Elder

  content.appendChild(storyWrapper);
}

export function loadTextsProphecies() {
  loadBackgroundImage(require('../images/prophecy-scroll.jpg'));
  const content = document.getElementById('content');
  content.innerHTML = '';

  const storyWrapper = document.createElement('div');
  storyWrapper.classList.add('screen');

  const chapterTitle = document.createElement('h2');
  chapterTitle.classList.add('chapter-title');
  chapterTitle.textContent = 'Request to see any relevant texts or prophecies';
  storyWrapper.appendChild(chapterTitle);

  const infoParagraph = document.createElement('p');
  infoParagraph.classList.add('info');
  infoParagraph.textContent = 'You have decided that knowledge is your best ally in this strange situation. And have made your way to the dwelling of Magister Elowen, a respected elder known for her wisdom and knowledge of celestial phenomena.';
  storyWrapper.appendChild(infoParagraph);

  const sceneNarrative = document.createElement('p');
  sceneNarrative.classList.add('narrative');
  sceneNarrative.textContent = 'Elowen nods solemnly and leads you into a hidden room concealed behind a sliding bookcase. As you step through the threshold, your eyes widen in awe at the sight that greets you. The walls are adorned with shelves displaying ancient scrolls and tomes, emanating an aura of wisdom and mystery. Elowen moves with grace, her hand reaching for a particular scroll among the many, her fingers tracing the intricate patterns etched into its surface. "This is the Prophecy of the Triad," she whispers, her voice weighted with reverence. "It speaks of the great Convergence and the pivotal role of the chosen ones."';
  storyWrapper.appendChild(sceneNarrative);

  const sceneContinue = document.createElement('p');
  sceneContinue.classList.add('narrative');
  sceneContinue.textContent = 'With deliberate care, Elowen lays the scroll on a large, weathered table, its edges curling slightly with age. The parchment unfurls, revealing a breathtaking illustration depicting three figures, each surrounded by a swirling array of elemental symbols. Beneath them, a prophecy is inscribed in a script long forgotten by time.';
  storyWrapper.appendChild(sceneContinue);

  const voiceEcho = document.createElement('em');
  voiceEcho.classList.add('voice-echo');
  voiceEcho.textContent = 'When three moons align and realms entwine, Three shall rise, by elements marked. Times crown, Lifes chalice, Spaces tome, Must unite lest all worlds fall to dark. Fires seeker, Waters caller, Earths weaver, Balance restore, or chaos shall reign. At Convergence peak, a choice they will make, To mend the cosmos or break its chain."';
  storyWrapper.appendChild(voiceEcho);

  const sceneConclusion = document.createElement('p');
  sceneConclusion.classList.add('narrative');
  sceneConclusion.textContent = 'The words resonate in the chamber, carrying with them a weight of destiny and consequence. Elowen gazes at you, her eyes alight with purpose, as the realization of the task ahead settles upon your shoulders.';
  storyWrapper.appendChild(sceneConclusion);

  // Add logic to go to Chapter 2 from Seek Elder

  content.appendChild(storyWrapper);
}
  
export function loadVisitTemple() {
  loadBackgroundImage(require('../images/temple-cosmic-wheel.jpg'));
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

// Choice 3 Pathway choices
export function loadMoons() {
  loadBackgroundImage(require('../images/three-moons-diverge.jpg'));

  const content = document.getElementById('content');
  content.innerHTML = '';

  const storyWrapper = document.createElement('div');
  storyWrapper.classList.add('screen');

  const chapterTitle = document.createElement('h2');
  chapterTitle.classList.add('chapter-title');
  chapterTitle.textContent = 'Ask about the meaning of the three moons in the sky';
  storyWrapper.appendChild(chapterTitle);

  const infoParagraph = document.createElement('p');
  infoParagraph.classList.add('info');
  infoParagraph.textContent = 'You make your way to the Temple of the Cosmic Wheel, the most revered spiritual site in the city. As you climb the polished marble steps, you sense a palpable shift in the atmosphere, a current of anticipation and unease that electrifies the air around you.';
  storyWrapper.appendChild(infoParagraph);

  const sceneNarrative = document.createElement('p');
  sceneNarrative.classList.add('narrative');
  sceneNarrative.textContent = 'High Priestess Selena, a figure of ethereal grace, emanates an otherworldly aura as she gazes at the heavens, her silver hair shimmering under the enigmatic light cast by the three moons. Meeting your eyes with a mixture of awe and concern, she begins to unravel the mysteries veiled behind this celestial phenomenon.';
  storyWrapper.appendChild(sceneNarrative);

  const sceneContinue = document.createElement('p');
  sceneContinue.classList.add('narrative');
  sceneContinue.textContent = '"The three moons," she imparts with a voice resonant with power, "represent the Triad of Cosmic Forces: Chronos, the keeper of Time; Anima, the essence of Life; and Cosmos, the weaver of Space. Their appearance in the sky signals the inception of the Great Convergence, a portentous time when the veils separating realms begin to wane."  Raising a hand to point at the heavens, she continues:';
  storyWrapper.appendChild(sceneContinue);

  const voiceEcho = document.createElement('em');
  voiceEcho.classList.add('voice-echo');
  voiceEcho.textContent = '"Each moon holds correspondence to one of the Lost Relics. The golden moon to the Crown of Eternity, the silver to the Chalice of Souls, and the emerald to the Codex of Realms. Their alignment not only signifies the potential rediscovery of the relics, but also the imperative need for their retrieval, for the preservation of all existence."';
  storyWrapper.appendChild(voiceEcho);

  // Add logic to go to Chapter 2 from Visit Temple

  content.appendChild(storyWrapper);
}

export function loadRoleDestiny() {
  loadBackgroundImage(require('../images/orb-of-destiny.jpg'));
  
  const content = document.getElementById('content');
  content.innerHTML = '';

  const storyWrapper = document.createElement('div');
  storyWrapper.classList.add('screen');

  const chapterTitle = document.createElement('h2');
  chapterTitle.classList.add('chapter-title');
  chapterTitle.textContent = 'Inquire about your role in this "destiny" she mentioned';
  storyWrapper.appendChild(chapterTitle);

  const infoParagraph = document.createElement('p');
  infoParagraph.classList.add('info');
  infoParagraph.textContent = 'As you approach the Temple of the Cosmic Wheel, the air around you becomes thick with anticipation and excitement. A sense of purpose and purposefulness courses through your veins, filling you with a sense of determination to fulfill the destiny she spoke of.';
  storyWrapper.appendChild(infoParagraph);

  const sceneNarrative = document.createElement('p');
  sceneNarrative.classList.add('narrative');
  sceneNarrative.textContent = 'High Priestess Selena holds you in her penetrating gaze as she beckons you to a secluded, circular chamber adjacent to the main sanctum. At its center, a pedestal cradles a crystal orb, within which ethereal mists intermingle and shift, beckoning you closer.';
  storyWrapper.appendChild(sceneNarrative);

  const sceneContinue = document.createElement('p');
  sceneContinue.classList.add('narrative');
  sceneContinue.textContent = '"The strands of fate, woven in enigmatic patterns, have led you to this pivotal juncture," she intones, her voice bearing a weight of solemn significance. "The Convergence not only rouses cosmic forces but also unveils the latent potential within select individuals. You, my child, are one such individual."';
  storyWrapper.appendChild(sceneContinue);

  const sceneConclusion = document.createElement('p');
  sceneConclusion.classList.add('narrative');
  sceneConclusion.textContent = 'Inviting you closer to the orb, she exhorts,';
  storyWrapper.appendChild(sceneConclusion);

  const voiceEcho = document.createElement('em');
  voiceEcho.classList.add('voice-echo');
  voiceEcho.textContent = '"This is the Orb of Destiny, an artifact that will reveal fleeting glimpses of the path that beckons you. However, know this: the future remains a composition of choices, unbound by the strictures of destiny. Your decisions will not only sculpt your own fate but reverberate through the tapestries of all realms."';
  storyWrapper.appendChild(voiceEcho);

  // Add logic to go to Chapter 2 from Visit Temple

  content.appendChild(storyWrapper);
}


export function loadNextSteps() {
  loadBackgroundImage(require('../images/temple-mosaic.jpg'));

  const content = document.getElementById('content');
  content.innerHTML = '';

  const storyWrapper = document.createElement('div');
  storyWrapper.classList.add('screen');

  const chapterTitle = document.createElement('h2');
  chapterTitle.classList.add('chapter-title');
  chapterTitle.textContent = 'Request guidance on what actions you should take next';
  storyWrapper.appendChild(chapterTitle);

  const infoParagraph = document.createElement('p');
  infoParagraph.classList.add('info');
  infoParagraph.textContent = 'As you approach the Temple of the Cosmic Wheel, the air around you becomes thick with anticipation and excitement. A sense of purpose and purposefulness courses through your veins, filling you with a sense of determination to fulfill the destiny she spoke of.';
  storyWrapper.appendChild(infoParagraph);

  const sceneNarrative = document.createElement('p');
  sceneNarrative.classList.add('narrative');
  sceneNarrative.textContent = 'With a nod of solemn assurance, Selena accompanies you to a vast mosaic stretching across the temple floor, an intricate web of interconnected realms rendered in rich, vibrant hues. "The path that stretches before you is anything but straightforward," she begins, her eyes reflecting a weighty determination. "The Convergence has set in motion formidable forces, and you find yourself poised at the heart of this tempest. Here is the course you must navigate:"';
  storyWrapper.appendChild(sceneNarrative);

  const taskOne = document.createElement('p');
  taskOne.classList.add('narrative');
  taskOne.textContent = '"Set forth to seek the elemental guardians. They will unlock the dormant power residing within you and steer you toward the pursuit of the Lost Relics."';
  storyWrapper.appendChild(taskOne);

  const taskTwo = document.createElement('p');
  taskTwo.classList.add('narrative');
  taskTwo.textContent = '"Take caution of the shadowy entities and the forces of chaos. They covet the Convergence, aiming to exploit its power to unravel the fabric of existence."';
  storyWrapper.appendChild(taskTwo);

  const taskThree = document.createElement('p');
  taskThree.classList.add('narrative');
  taskThree.textContent = '"Unite with the other chosen ones. Solely in alliance can you hope to confront the trials that lie ahead and confront the momentous choice that holds the sway over the destinies of all realms."';
  storyWrapper.appendChild(taskThree);

  const sceneContinue = document.createElement('p');
  sceneContinue.classList.add('narrative');
  sceneContinue.textContent = 'Resting her hand upon your shoulder, she imparts,';
  storyWrapper.appendChild(sceneContinue);

  const voiceEcho = document.createElement('em');
  voiceEcho.classList.add('voice-echo');
  voiceEcho.textContent = '"The path will be fraught with peril, burdened with weighty responsibility. Nevertheless, remember, you were endowed with the mantle of chosenness for a reason. Place trust in your inherent strength and in the harmonious equilibrium of the cosmos."';
  storyWrapper.appendChild(voiceEcho);

  // Add logic to go to Chapter 2 from Visit Temple

  content.appendChild(storyWrapper);
}

  export default loadChapterOne;