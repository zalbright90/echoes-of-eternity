// Function to update the story output on the page
export function updateStoryOutput(story) {
    const storyOutput = document.getElementById('storyOutput');
    if (storyOutput) {
        storyOutput.innerHTML += `<p>${story}</p>`;
        storyOutput.scrollTop = storyOutput.scrollHeight; // Auto-scroll to the bottom
    }
}

// Function to update the character info display
export function updateCharacterInfo(player) {
    const characterInfo = document.getElementById('characterInfo');
    if (characterInfo) {
        characterInfo.innerHTML = `
            <h3>${player.name}</h3>
            <p>Class: ${player.class}</p>
            <p>Skills: ${player.skills.join(', ')}</p>
        `;
    }
}

// Function to show inventory
export function showInventory(player) {
    alert(`Inventory: ${player.equipment.join(', ')}`);
    // In the future, you might want to create a more sophisticated inventory display
}

// Function to update available options for the player
export function updateOptions(options) {
    const optionsContainer = document.getElementById('playerOptions');
    if (optionsContainer) {
        optionsContainer.innerHTML = options.map(option => 
            `<button onclick="makeDecision('${option}')">${option}</button>`
        ).join('');
    }
}