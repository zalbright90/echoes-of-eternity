import { createChoiceButtons, handleChoice, saveProgress, loadProgress } from './story'

import { loadBackgroundImage } from './initializer'

import { createItemList } from './itemListModule'

function loadChapterTwoElders(choice) {
    loadBackgroundImage(require('../images/aethoria-library.jpg'));

    const content = document.getElementById('content');
    content.innerHTML = '';

    const storyWrapper = document.createElement('div');
    storyWrapper.classList.add('screen');

    // Start of Chapter Two - Seek an Elder
    if (!choice) {
        const chapterTitle = document.createElement('h2');
        chapterTitle.classList.add('chapter-title');
        chapterTitle.textContent = 'Chapter 2: The Prophecy Unveiled';
        storyWrapper.appendChild(chapterTitle);

        const pathTitle = document.createElement('h3');
        pathTitle.classList.add('path-title');
        pathTitle.textContent = 'The Forgotten Ones';
        storyWrapper.appendChild(pathTitle);

        const infoParagraph = document.createElement('p');
        infoParagraph.classList.add('info');
        infoParagraph.textContent = 'You, the Forgotten Ones, walk a path unseen by many but vital to the fabric of the realms. Cast aside by fate, you must forge your own destiny. Through your keen intuition, hidden knowledge, and relentless pursuit of the unknown, you have uncovered the following insights so far: You have uncovered that your path is one of secrecy, with forgotten knowledge about the elemental realms only known to few. Through old, hidden manuscripts and ancient artifacts, you have and will learn how to unlock portions of elemental power, though at a cost unknown to others. You have learned of unseen, perhaps dangerous, connections between your reality and the elemental realms, which no one else has discovered.';
        storyWrapper.appendChild(infoParagraph);

        const sceneNarrative = document.createElement('p');
        sceneNarrative.classList.add('narrative');
        sceneNarrative.textContent = 'The Grand Library of Aethoria hums with frantic energy as scholars and researchers rush about, pulling ancient tomes from shelves and arguing in hushed, urgent tones. Magister Elowen leads you through the chaos to a hidden door at the back of the library, and she ushers you into a secret chamber.';
        storyWrapper.appendChild(sceneNarrative);

        const voiceEcho = document.createElement('em');
        voiceEcho.classList.add('voice-echo');
        voiceEcho.textContent = 'The Convergence has awakened something ancient and powerful...';
        storyWrapper.appendChild(voiceEcho);

        const sceneContinue = document.createElement('p');
        sceneContinue.classList.add('narrative');
        sceneContinue.textContent = 'Inside, a group of diverse individuals are gathered around a large, circular table. On the table lies an ornate book, its pages glowing with an otherworldly light.';
        storyWrapper.appendChild(sceneContinue);

        const sceneConclusion = document.createElement('p');
        sceneConclusion.classList.add('narrative');
        sceneConclusion.textContent = 'Elowen introduces you to the group. "This is the Council of Lore. We have been preparing for this day for generations. The Tome of Convergence has awakened, and it speaks of a prophecy that could shape the fate of all realms.';
        storyWrapper.appendChild(sceneConclusion);

        const choiceQuestion = document.createElement('p');
        choiceQuestion.classList.add('choice-section');
        choiceQuestion.textContent = 'How do you respond?';
        storyWrapper.appendChild(choiceQuestion);

        const choiceList = document.createElement('ol');
        choiceList.classList.add = 'choice-list';
        const choices = [
            { text: "Ask to read the Tome of Convergence yourself.", value: 'readTome' },
            { text: "Request that Elowen explain the prophecy to you.", value:'hearProphecy' },
            { text: "Inquire about the Council of Lore and their purpose.", value: 'councilPurpose' }
        ];
        storyWrapper.appendChild(choiceList);
        createChoiceButtons(choices, storyWrapper);
        content.appendChild(storyWrapper);
    }
}

// Read Tome of Convergence Choice
export function loadReadTome() {
    loadBackgroundImage(require('../images/tome-convergence.jpg'));

    const content = document.getElementById('content');
    content.innerHTML = '';

    const storyWrapper = document.createElement('div');
    storyWrapper.classList.add('screen');

    const chapterTitle = document.createElement('h2');
    chapterTitle.classList.add('chapter-title');
    chapterTitle.textContent = 'Chapter 2: The Prophecy Unveiled';
    storyWrapper.appendChild(chapterTitle);

    const pathTitle = document.createElement('h3');
    pathTitle.classList.add('path-title');
    pathTitle.textContent = 'The Forgotten Ones - Read the Tome of Convergence';
    storyWrapper.appendChild(pathTitle);

    const infoParagraph = document.createElement('p');
    infoParagraph.classList.add('info');
    infoParagraph.textContent = 'As your fingers brush against the ancient, glowing pages of the Tome, a surge of energy courses through your veins. The world around you dims, and your vision is flooded with knowledge beyond comprehension.';
    storyWrapper.appendChild(infoParagraph);

    const sceneNarrative = document.createElement('p');
    sceneNarrative.classList.add('narrative');
    sceneNarrative.textContent = 'Suddenly, three artifacts materialize before your minds eye, vivid and pulsing with immense power:'
    storyWrapper.appendChild(sceneNarrative);

    const items = [
        { text: "A crown - shimmering with an ethereal light, its surface ripples with the passage of time itself. It pulses with temporal energy, bending reality as if each moment were caught in its grasp." },
        { text: "A chalice - overflowing with a luminous liquid, glowing with the very essence of life. The air around it seems to hum, as if the heartbeat of the world itself is contained within its depths." },
        { text: "A book - its pages rustle as if alive, and within them, entire worlds are written and rewritten. The ink shifts and swirls, holding the secrets of creation itself, realms lost and yet to be born." }
    ];
    const artifactList = createItemList(items, { type: 'ol' });
    storyWrapper.appendChild(artifactList);

    const sceneContinue = document.createElement('p');
    sceneContinue.classList.add('narrative');
    sceneContinue.textContent = 'These are the Lost Relics, whispered of in forgotten legends, hidden away eons ago to prevent catastrophe. The vision shows them as keystones in the balance of power between the realms. Their significance weighs heavily upon your mind, for you know now what few others do: the fate of all existence is tied to these artifacts, and they must not fall into the wrong hands.';
    storyWrapper.appendChild(sceneContinue);

    const sceneChange = document.createElement('p');
    sceneChange.classList.add('narrative');
    sceneChange.textContent = 'The Tome then reveals its final secret—a choice. A moment will come when the realms themselves will collide, and only the bearers of these relics will be able to make the decision that could either save or doom them all. The moment of Convergence draws near, and when it does, the power to reshape destiny will rest in your hands.';
    storyWrapper.appendChild(sceneChange);

    const sceneConclusion = document.createElement('p');
    sceneConclusion.classList.add('narrative');
    sceneConclusion.textContent = 'As the vision fades, your breath catches. You glance down at your palm, where a new mark has appeared, glowing faintly: a spiraling clock face, intricately detailed as if it ticks with the flow of time itself. The weight of your destiny sinks in — you have been chosen. You are the Timeweaver, fated to seek and wield the Crown of Eternity, the first of the Lost Relics.';
    storyWrapper.appendChild(sceneConclusion);

    const voiceEcho = document.createElement('em');
    voiceEcho.classList.add('voice-echo');
    voiceEcho.textContent = 'The knowledge burns within you now. This is your path. The relics must be found, and the fate of all realms rests on the choices that lie ahead. The clock is ticking.';
    storyWrapper.appendChild(voiceEcho);
    content.appendChild(storyWrapper);
}
// Hear Prophecy Choice


// Council's Purpose Choice


export default loadChapterTwoElders;