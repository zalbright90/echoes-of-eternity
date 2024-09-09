import './style.css';
import initialLoad from './scripts/startPageLoader';
import createStartScreen from './scripts/createStartScreen';

function initializeApp() {
    console.log('Initializing app');
    initialLoad();
    const content = document.getElementById('content');
    
    // Check if content is already loaded
    if (content.children.length === 0) {
        console.log('Loading content');
        function loadContent(moduleFunction) {
            console.log('loadContent called with:', moduleFunction.name);
            const element = moduleFunction();
            console.log('Created element:', element);
            content.appendChild(element);
            console.log('Content after append:', content.innerHTML);
        }
        
        loadContent(createStartScreen);
    } else {
        console.log('Content already loaded, skipping');
    }
}

// Run initialization once on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Handle hot module replacement
if (module.hot) {
    module.hot.accept(['./scripts/startPageLoader', './scripts/createStartScreen'], () => {
        console.log('Hot module replacement triggered');
        const content = document.getElementById('content');
        content.innerHTML = '';
        initializeApp();
    });
}