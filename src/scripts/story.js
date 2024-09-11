import { loadBackgroundImage } from "./initializer";

function narrativeScreen() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const storyWrapper = document.createElement('div');
  storyWrapper.classList.add('screen');

  // Start of the story
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

  content.appendChild(storyWrapper);

  return storyWrapper;
}

// Function to dynamically create choice buttons
function createChoiceButtons(choices, parentElement) {
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';

  choices.forEach(choice => {
      const button = document.createElement('button');
      button.className = 'choice-button';
      button.textContent = choice.text;
      button.setAttribute('data-choice', choice.value);

      // Add event listener for each button
      button.addEventListener('click', () => handleChoice(choice.value));

      buttonContainer.appendChild(button);
  });

  parentElement.appendChild(buttonContainer);
}

// Function to handle user choices
function handleChoice(choice) {
  switch (choice) {
      case 'investigateMoons':
          console.log('User pushes through crowd.');
          loadInvestigateMoons();
          break;
      case 'seekElder':
          console.log('User seeks an elder.');
          loadSeekElder();
          break;
      case 'visitTemple':
          console.log('User visits a temple.');
          loadVisitTemple();
          break;
      default:
          console.log('Unknown choice.');
          break;
  }
}

// Choices for Act 1: Chapter 1
function loadInvestigateMoons() {
  console.log('Loading Investigate the Moons...');

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

  return storyWrapper;
}

function loadSeekElder() {
  console.log('Loading Seek Elder...');

  loadBackgroundImage(require('../images/seek-elders.jpg'));

  const content = document.getElementById('content');
  content.innerHTML = '';
  
}

function loadVisitTemple() {
  const content = document.getElementById('content');
  content.innerHTML = '<p>You head to the nearest temple to consult with the priests...</p>';
  // Continue narrative logic...
}

export default narrativeScreen;