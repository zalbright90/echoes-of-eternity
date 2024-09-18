import { loadBackgroundImage } from './initializer';
import loadChapterOne, { loadInvestigateMoons, loadInvestigateSymbols, loadTriadFate, loadLookAround, loadSeekElder, loadAboutConvergence, loadAwakeningPowers, loadTextsProphecies, loadVisitTemple, loadMoons, loadRoleDestiny, loadNextSteps } from './chapterOne';
import loadChapterTwo, {} from './chapterTwo-Moons';

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
      default:
          console.log('Unknown choice');
          break;
  }
}

export default narrativeScreen;