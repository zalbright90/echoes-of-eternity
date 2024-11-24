import { createChoiceButtons, handleChoice, saveProgress, loadProgress } from './story';
import { loadBackgroundImage } from './initializer';
import { createTitle, createPathTitle, createScene, createParagraph, createQuestion, createChoiceList, createVoiceEcho, } from './storyUtils';

function loadChapterTwoMoons(choice) {
    loadBackgroundImage(require('../images/elemental-figures.jpg'));

    const content = document.getElementById('content');
    content.innerHTML = '';

    const storyWrapper = document.createElement('div');
    storyWrapper.classList.add('screen');

    // Start of Chapter Two - Investigate Moons Pathway
    if (!choice) {
        storyWrapper.appendChild(createTitle('Chapter 2: The Prophecy Unveiled'));
    
        storyWrapper.appendChild(createPathTitle('The Chosen Ones'));

        storyWrapper.appendChild(createScene('You, The Chosen Ones, have been chose to embark on a journey to the elemental realms. Through a combination of scholarly research, adventurous exploration, and mystical insight, you have gained the following knowledge so far: Strange symbols have appeared on your bodies, marking you as the ones selected by the elemental forces for a higher purpose. You have begun to understand the basic structure of the elemental realms and how the forces of nature interact within you. You have received cryptic guidance from ancient beings regarding their mission to restore balance to the elemental realms.'));

        storyWrapper.appendChild(createParagraph('As you make your way through the streets of Aethoria, the visions and symbols from before still burn in your mind. The voice—deep, ancient—whispers again:'));

        storyWrapper.appendChild(createVoiceEcho('"Seeker, the Elemental Realms cry out for restoration. The path you choose will shape the future."'));

        storyWrapper.appendChild(createParagraph('As you ponder the meaning of these words, you notice that the crowds are all moving in one direction - towards the Grand Temple of Elements. The normally pristine white marble of the temple seems to shimmer with an array of colors, reflecting the hues of the three moons still visible in the sky. Your symbol pulses, and you feel it pulling you toward the temple steps.'));

        storyWrapper.appendChild(createParagraph('Three figures stand at the entrance, each radiating an energy that corresponds to the elements of your vision. Their presence is undeniable, and you realize these figures hold the answers you seek—but which one will guide you?'));

        storyWrapper.appendChild(createQuestion('What do you do?'));


        const choiceList = createChoiceList([
            'Approach the figure wreathed in flames.',
            'Seek out the individual surrounded by a misty aura.',
            'Move towards the person with vines and leaves swirling around them.'
        ]);
        storyWrapper.appendChild(choiceList);

        const choices = [
            { text: "Fiery individual", value: 'flameGuardian' },
            { text: "Misty individual", value: 'mistWeaver' },
            { text: "Leafy individual", value: 'earthShaper' }
        ];
        createChoiceButtons(choices, storyWrapper);

    } else {
        switch (handleChoice) {
            case 'flameGuardian':
                loadFlameGuardian();
                break;
            case 'mistWeaver':
                loadMistWeaver();
                break;
            case 'earthShaper':
                loadEarthShaper();
                break;
        }   
    }
    content.appendChild(storyWrapper);
}

// Flame Guardian Choice
export function loadFlameGuardian() {
    loadBackgroundImage(require('../images/flame-guardian.jpg'));

    const content = document.getElementById('content');
    content.innerHTML = '';

    const storyWrapper = document.createElement('div');
    storyWrapper.classList.add('screen');

    storyWrapper.appendChild(createTitle('Chapter 2: The Prophecy Unvieled'));

    storyWrapper.appendChild(createPathTitle('The Chosen Ones - Flame Guardian'));

    storyWrapper.appendChild(createParagraph('As you approach the figure wreathed in flames, the air around you grows warmer. The figures eyes open, revealing irises that dance with fire.'));

    storyWrapper.appendChild(createParagraph('"I am Ignis, Guardian of the Eternal Flame," the figures voice crackling like a hearth. "You bear the mark of the Flame Seeker. The Crown of Eternity calls to you."'));

    storyWrapper.appendChild(createParagraph('Ignis extends a hand, revealing a small, flame-shaped crystal. "This Shard of Fire will guide you to the Crown, hidden within the heart of a dying star. But beware, for shadows seek to extinguish all light."'));
    
    // Logic to continue to Chapter 3

    content.appendChild(storyWrapper);
}

// Mist Weaver Choice
export function loadMistWeaver() {
    loadBackgroundImage(require('../images/mist-weaver.jpg'));

    const content = document.getElementById('content');
    content.innerHTML = '';

    const storyWrapper = document.createElement('div');
    storyWrapper.classList.add('screen');

    storyWrapper.appendChild(createTitle('Chapter 2: The Prophecy Unveiled'));

    storyWrapper.appendChild('The Chosen Ones - Mist Weaver');

    storyWrapper.appendChild(createParagraph('You make your way to the figure surrounded by a misty aura. As you draw near, you feel a cool, refreshing sensation wash over you. The figures eyes open, revealing swirling pools of blue and grey.'));

    storyWrapper.appendChild(createParagraph('"Welcome, Tide Caller. I am Aquarius, Keeper of the Endless Depths," the figure says, their voice like water flowing over stones. "The Chalice of Souls resonates with your spirit."'));

    storyWrapper.appendChild(createParagraph('Aquarius holds out a hand, a small, droplet-shaped pearl resting in their palm. "This Pearl of the Abyss will lead you to the Chalice, hidden in the deepest trench of the Primordial Ocean. But be warned, dark currents seek to drag the realms into chaos.'));

  // Logic to continue to Chapter 3

  content.appendChild(storyWrapper);
}

// Earth Shaper Choice
export function loadEarthShaper() {
    loadBackgroundImage(require('../images/earth-shaper.jpg'));

    const content = document.getElementById('content');
    content.innerHTML = '';

    const storyWrapper = document.createElement('div');
    storyWrapper.classList.add('screen');

    storyWrapper.appendChild(createTitle('Chapter 2: The Prophecy Unveiled'));

    storyWrapper.appendChild(createPathTitle('The Chosen Ones - Earth Shaper'));

    storyWrapper.appendChild(createParagraph('You approach the person with vines and leaves swirling around them. The ground beneath your feet seems to hum with energy. The figures eyes open, revealing irises of deep, rich brown flecked with green, red and yellow.'));

    storyWrapper.appendChild(createParagraph('"Greetings, Root Weaver. I am Terra, Voice of the Ancient Groves," the figure speaks, their words resonating like a deep drumbeat. "The Codex of Realms calls for your touch."'));

    storyWrapper.appendChild(createParagraph('Terra presents you with a seed that glows with an inner light. "This Seed of Yggdrasil will guide you to the Codex, nestled in the heart of the World Tree. But tread carefully, for parasitic forces seek to corrupt the tree and unravel the fabric of reality."'));

    // Logic to continue to Chapter 3
    content.appendChild(storyWrapper);
}

export default loadChapterTwoMoons;