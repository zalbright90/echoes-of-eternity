import bgImage from '../images/echoes-forest-bg.jpg';
function loadBackgroundImage() {
  const imageLoad = document.createElement('div');

  const backgroundImage = document.createElement('img');
  backgroundImage.src = bgImage;
  backgroundImage.alt = 'Fantasy Forest';
  backgroundImage.classList.add('bg-image');
  imageLoad.appendChild(backgroundImage);


  return imageLoad;
}

function initialLoad() {
  const body = document.querySelector('body');
  body.insertBefore(loadBackgroundImage(), document.querySelector('main'));

  const content = document.querySelector('#content');
    const initialContent = document.createElement('div');
    initialContent.textContent = 'Initial content goes here.';
    content.appendChild(initialContent);
}

export default initialLoad;