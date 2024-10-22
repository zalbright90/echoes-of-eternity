import { loadBackgroundImage } from './initializer';

import loadChapterOne, { loadInvestigateMoons, loadInvestigateSymbols, loadTriadFate, loadLookAround, loadSeekElder, loadAboutConvergence, loadAwakeningPowers, loadTextsProphecies, loadVisitTemple, loadMoons, loadRoleDestiny, loadNextSteps } from './chapterOne';

import loadChapterTwoMoons, { loadFlameGuardian, loadMistWeaver, loadEarthShaper } from './chapterTwo-Moons';

import loadChapterTwoElders, { loadReadTome } from './chapterTwo-Elder';


function narrativeScreen() {
  loadChapterOne();
}

// Function to dynamically create choice buttons
export function createChoiceButtons(choices, parentElement) {
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
export function handleChoice(choice) {

  saveProgress(choice);

  switch (choice) {
      case 'investigateMoons':
          console.log('User pushes through crowd...');
          loadInvestigateMoons();
          break;
          case 'investigateSymbols':
              console.log('User examines symbol on hand...');
              loadInvestigateSymbols();
              break;
          case 'triadFate':
              console.log('User asks about Triad of Fate...');
              loadTriadFate();
              break;
          case 'lookAround':
              console.log('User scans the crowd...');
              loadLookAround();
              break;
      case 'seekElder':
          console.log('User seeks an elder...');
          loadSeekElder();
          break;
          case 'aboutConvergence':
            console.log('User reads about the Convergence...');
            loadAboutConvergence();
            break;
          case 'awakeningPowers':
            console.log('User learns about awakening the powers...');
            loadAwakeningPowers();
            break;
          case 'textsProphecies':
            console.log('User reads texts from prophecies...');
            loadTextsProphecies();
            break;
      case 'visitTemple':
          console.log('User visits a temple...');
          loadVisitTemple();
          break;
          case 'moons':
            console.log('User looks to the moons with the High Priestess...');
            loadMoons();
            break;
          case 'roleDestiny':
            console.log('User has their role explained...');
            loadRoleDestiny();
            break;
          case 'nextSteps':
            console.log('User finds out their next steps...');
            loadNextSteps();
            break;
      case 'chapterTwoMoons':
        console.log('User as progress to Chapter 2 from investigating the moons...');
        loadChapterTwoMoons();
        break;
        case 'flameGuardian':
          console.log('User chooses Flame Guardian...');
          loadFlameGuardian();
          break;
        case 'mistWeaver':
          console.log('User chooses Mist Weaver...');
          loadMistWeaver();
          break;
        case 'earthShaper':
          console.log('User chooses Earth Shaper...');
          loadEarthShaper();
          break;
      case 'chapterTwoElders':
        console.log('User seeks the elders...');
        loadChapterTwoElders();
        break;
        case 'readTome':
          console.log('User reads from the tome...');
          loadReadTome();
          break;
      default:
          console.log('Unknown choice; dev check import, switch case, and export');
          break;
  }
}

// Create a function to save reader progress
export function saveProgress(choice) {
  localStorage.setItem('storyProgress', JSON.stringify(choice));
  console.log('Progress Saved');
}

// Create a function to load reader progress
export function loadProgress() {
  const savedChoice = localStorage.getItem('storyProgress');
  console.log('Progress Loaded');
  return savedChoice ? JSON.parse(savedChoice) : null;
}

// Clear progress if player wants to start over
export function clearProgress() {
  localStorage.removeItem('storyProgress');
  console.log('Progress cleared');
  narrativeScreen();
}

export default narrativeScreen;