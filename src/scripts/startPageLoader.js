import bgImage from '../images/echoes-forest-bg.jpg';

function loadBackgroundImage() {
  const body = document.body;
  body.style.backgroundImage = `url(${bgImage})`;
  body.style.backgroundSize = 'cover';
  body.style.backgroundPosition = 'center';
  body.style.backgroundRepeat = 'no-repeat';
}

function initialLoad() {
  loadBackgroundImage();

  const content = document.getElementById('content');
  if (!content) {
    const newContent = document.createElement('div');
    newContent.id = 'content';
    document.body.appendChild(newContent);
  }
}

export default initialLoad;