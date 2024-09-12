import { loadBackgroundImage } from './initializer';
import loadChapterOne, { loadInvestigateMoons, loadInvestigateSymbols, loadSeekElder, loadVisitTemple } from './chapterOne';

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
      case 'seekElder':
          console.log('User seeks an elder...');
          loadSeekElder();
          break;
      case 'visitTemple':
          console.log('User visits a temple...');
          loadVisitTemple();
          break;
      default:
          console.log('Unknown choice');
          break;
  }
}

export default narrativeScreen;