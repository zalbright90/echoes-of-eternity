import { createChoiceButtons, handleChoice, saveProgress, loadProgress } from './story';
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
        { text: "Approach the figure wreathed in flames.", value: 'flameGuardian' },
        { text: "Seek out the individual surrounded by a misty aura", value: 'mistWeaver' },
        { text: "Move towards the person with vines and leaves swirling around them", value: 'earthShaper' }
    ];
    storyWrapper.appendChild(choiceList);
    createChoiceButtons(choices, storyWrapper);
    content.appendChild(storyWrapper);
  }
}

// Flame Guardian Choice
export function loadFlameGuardian() {
    loadBackgroundImage(require('../images/flame-guardian.jpg'));

    const content = document.getElementById('content');
    content.innerHTML = '';

    const storyWrapper = document.createElement('div');
    storyWrapper.classList.add('screen');

    const chapterTitle = document.createElement('h2');
    chapterTitle.classList.add('chapter-title');
    chapterTitle.textContent = 'Chapter 2: The Prophecy Unvieled';
    storyWrapper.appendChild(chapterTitle);

    const pathTitle = document.createElement('h3');
    pathTitle.classList.add('path-title');
    pathTitle.textContent = 'The Chosen Ones - Flame Guardian';
    storyWrapper.appendChild(pathTitle);

    const sceneNarrative = document.createElement('p');
    sceneNarrative.classList.add('narrative');
    sceneNarrative.textContent = 'As you approach the figure wreathed in flames, the air around you grows warmer. The figures eyes open, revealing irises that dance with fire.';
    storyWrapper.appendChild(sceneNarrative);

    const sceneContinue = document.createElement('p');
    sceneContinue.classList.add('narrative');
    sceneContinue.textContent = '"I am Ignis, Guardian of the Eternal Flame," the figures voice crackling like a hearth. "You bear the mark of the Flame Seeker. The Crown of Eternity calls to you."';
    storyWrapper.appendChild(sceneContinue);

    const sceneConclusion = document.createElement('p');
    sceneConclusion.classList.add('narrative');
    sceneConclusion.textContent = 'Ignis extends a hand, revealing a small, flame-shaped crystal. "This Shard of Fire will guide you to the Crown, hidden within the heart of a dying star. But beware, for shadows seek to extinguish all light."';
    storyWrapper.appendChild(sceneConclusion);

    content.appendChild(storyWrapper);
}

// Mist Weaver Choice
export function loadMistWeaver() {
  loadBackgroundImage(require('../images/mist-weaver.jpg'));

  const content = document.getElementById('content');
  content.innerHTML = '';

  const storyWrapper = document.createElement('div');
  storyWrapper.classList.add('screen');

  const chapterTitle = document.createElement('h2');
  chapterTitle.classList.add('chapter-title');
  chapterTitle.textContent = 'Chapter 2: The Prophecy Unveiled';
  storyWrapper.appendChild(chapterTitle);

  const pathTitle = document.createElement('h3');
  pathTitle.classList.add('path-title');
  pathTitle.textContent = 'The Chosen Ones - Mist Weaver';
  storyWrapper.appendChild(pathTitle);

  const sceneNarrative = document.createElement('p');
  sceneNarrative.classList.add('narrative');
  sceneNarrative.textContent = 'You make your way to the figure surrounded by a misty aura. As you draw near, you feel a cool, refreshing sensation wash over you. The figures eyes open, revealing swirling pools of blue and grey.';
  storyWrapper.appendChild(sceneNarrative);

  const sceneContinue = document.createElement('p');
  sceneContinue.classList.add('narrative');
  sceneContinue.textContent = '"Welcome, Tide Caller. I am Aquarius, Keeper of the Endless Depths," the figure says, their voice like water flowing over stones. "The Chalice of Souls resonates with your spirit."';
  storyWrapper.appendChild(sceneContinue);

  const sceneConclusion = document.createElement('p');
  sceneConclusion.classList.add('narrative');
  sceneConclusion.textContent = 'Aquarius holds out a hand, a small, droplet-shaped pearl resting in their palm. "This Pearl of the Abyss will lead you to the Chalice, hidden in the deepest trench of the Primordial Ocean. But be warned, dark currents seek to drag the realms into chaos.';
  storyWrapper.appendChild(sceneConclusion);

  content.appendChild(storyWrapper);
}

// Earth Shaper Choice
export function loadEarthShaper() {
  loadBackgroundImage(require('../images/earth-shaper.jpg'));

  const content = document.getElementById('content');
  content.innerHTML = '';

  const storyWrapper = document.createElement('div');
  storyWrapper.classList.add('screen');

  const chapterTitle = document.createElement('h2');
  chapterTitle.classList.add('chapter-title');
  chapterTitle.textContent = 'Chapter 2: The Prophecy Unveiled';
  storyWrapper.appendChild(chapterTitle);

  const pathTitle = document.createElement('h3');
  pathTitle.classList.add('path-title');
  pathTitle.textContent = 'The Chosen Ones - Earth Shaper';
  storyWrapper.appendChild(pathTitle);

  const sceneNarrative = document.createElement('p');
  sceneNarrative.classList.add('narrative');
  sceneNarrative.textContent = 'You approach the person with vines and leaves swirling around them. The ground beneath your feet seems to hum with energy. The figures eyes open, revealing irises of deep, rich brown flecked with green, red and yellow.';
  storyWrapper.appendChild(sceneNarrative);

  const sceneContinue = document.createElement('p');
  sceneContinue.classList.add('narrative');
  sceneContinue.textContent = '"Greetings, Root Weaver. I am Terra, Voice of the Ancient Groves," the figure speaks, their words resonating like a deep drumbeat. "The Codex of Realms calls for your touch."';
  storyWrapper.appendChild(sceneContinue);

  const sceneConclusion = document.createElement('p');
  sceneConclusion.classList.add('narrative');
  sceneConclusion.textContent = 'Terra presents you with a seed that glows with an inner light. "This Seed of Yggdrasil will guide you to the Codex, nestled in the heart of the World Tree. But tread carefully, for parasitic forces seek to corrupt the tree and unravel the fabric of reality."';
  storyWrapper.appendChild(sceneConclusion);

  content.appendChild(storyWrapper);
}
export default loadChapterTwoMoons;