function loadBackgroundImage(imageSrc) {
  const body = document.body;
  body.style.backgroundImage = `url(${imageSrc})`;
  body.style.backgroundSize = 'cover';
  body.style.backgroundPosition = 'center';
  body.style.backgroundRepeat = 'no-repeat';
}

function initialLoad() {
  loadBackgroundImage(require('../images/echoes-forest-bg.jpg'));

  const content = document.getElementById('content');
  if (!content) {
    const newContent = document.createElement('div');
    newContent.id = 'content';
    document.body.appendChild(newContent);
  }
}

export { loadBackgroundImage, initialLoad };