import { loadBackgroundImage } from './initializer';

import loadChapterOne, { loadInvestigateMoons, loadInvestigateSymbols, loadTriadFate, loadLookAround, loadSeekElder, loadAboutConvergence, loadAwakeningPowers, loadTextsProphecies, loadVisitTemple, loadMoons, loadRoleDestiny, loadNextSteps } from './chapterOne';

import loadChapterTwoMoons, { loadFlameGuardian, loadMistWeaver, loadEarthShaper } from './chapterTwo-Moons';

import loadChapterTwoElders, { loadReadTome, loadHearProphecy, loadCouncilPurpose } from './chapterTwo-Elder';


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
            console.log('User has progressed to Chapter 2 from investigating the moons...');
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
            case 'hearProphecy':
                console.log('User chooses to listen...');
                loadHearProphecy();
                break;
            case 'councilPurpose':
                console.log('User chooses to hear the councils purpose...');
                loadCouncilPurpose();
                break;
        default:
            console.log('Unknown choice; dev check import, switch case, and check export');
            break;
  }
}

// Create a function to save reader progress
export function saveProgress(progressData) {
  try {
    if (typeof progressData !== 'object') {
        throw new Error('progress data must be an object');
    }
    const existingProgress = loadProgress() || {};
    const updatedProgress = { ...existingProgress, ...progressData};

    localStorage.setItem('storyProgress', JSON.stringify(updatedProgress));
    console.log('Progress Saved: ', updatedProgress);
  } catch (error) {
    console.error('Error saving progress: ', error);
  }
}

// Create a function to load reader progress
export function loadProgress() {
    try {
        const savedData = localStorage.getItem('storyProgress');
        console.log('Progress Loaded');
        return savedData? JSON.parse(savedData) : null;
    } catch (error) {
        console.error('Error loading progress:', error);
        return null;
    }
}

// Clear progress if player wants to start over
export function clearProgress() {
  try {
    localStorage.removeItem('storyProgress');
    console.log('Progress cleared');

    if (typeof callback === 'function') {
        callback();
    }
  } catch (error) {
    console.error('Error clearing progress:', error);
  }
}

export default narrativeScreen;