import './style.css';
import initialLoad from './scripts/startPageLoader';

document.addEventListener('DOMContentLoaded', () => {
    initialLoad();
    const content = document.querySelector('body');

    function loadContent(moduleFunction) {
        content.innerHTML = '';
        content.appendChild(moduleFunction());
    }

    loadContent();
});