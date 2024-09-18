function loadBackgroundImage(imageSrc) {
  const body = document.body;
  body.style.backgroundImage = `url(${imageSrc})`;
  body.style.backgroundSize = 'cover';
  body.style.backgroundPosition = 'center';
  body.style.backgroundRepeat = 'no-repeat';
  body.style.width = '100vw';
  body.style.height = 'auto';
}

function initialLoad() {
  loadBackgroundImage(require('../images/echoes-of-eternity.jpg'));

  const content = document.getElementById('content');
  if (!content) {
    const newContent = document.createElement('div');
    newContent.id = 'content';
    document.body.appendChild(newContent);
  }
}

export { loadBackgroundImage, initialLoad };