import { createChoiceButtons, handleChoice, saveProgress, loadProgress } from './story'
import { loadBackgroundImage } from './initializer'
import { createTitle, createPathTitle, createScene, createParagraph, createQuestion, createChoiceList, createVoiceEcho } from './storyUtils';
import { createItemList } from './itemListModule'

function loadChapterTwoElders(choice) {
    loadBackgroundImage(require('../images/aethoria-library.jpg'));

    const content = document.getElementById('content');
    content.innerHTML = '';

    const storyWrapper = document.createElement('div');
    storyWrapper.classList.add('screen');

    // Start of Chapter Two - Seek an Elder
    if (!choice) {
        storyWrapper.appendChild(createTitle('Chapter 2: The Prophecy Unveiled'));

        storyWrapper.appendChild(createPathTitle('The Forgotten Ones'));

        storyWrapper.appendChild(createScene('You, the Forgotten Ones, walk a path unseen by many but vital to the fabric of the realms. Cast aside by fate, you must forge your own destiny. Through your keen intuition, hidden knowledge, and relentless pursuit of the unknown, you have uncovered the following insights so far: You have uncovered that your path is one of secrecy, with forgotten knowledge about the elemental realms only known to few. Through old, hidden manuscripts and ancient artifacts, you have and will learn how to unlock portions of elemental power, though at a cost unknown to others. You have learned of unseen, perhaps dangerous, connections between your reality and the elemental realms, which no one else has discovered.'))

        storyWrapper.appendChild(createParagraph('The Grand Library of Aethoria hums with frantic energy as scholars and researchers rush about, pulling ancient tomes from shelves and arguing in hushed, urgent tones. Magister Elowen leads you through the chaos to a hidden door at the back of the library, and she ushers you into a secret chamber.'));

        storyWrapper.appendChild(createVoiceEcho('The Convergence has awakened something ancient and powerful...'));

        storyWrapper.appendChild(createParagraph('Inside, a group of diverse individuals are gathered around a large, circular table. On the table lies an ornate book, its pages glowing with an otherworldly light.'));

        storyWrapper.appendChild(createParagraph('Elowen introduces you to the group. "This is the Council of Lore. We have been preparing for this day for generations. The Tome of Convergence has awakened, and it speaks of a prophecy that could shape the fate of all realms.'));

        storyWrapper.appendChild(createQuestion('How do you respond?'));

        const choiceList = createChoiceList([
            'Ask to read the Tome of Convergence yourself.',
            'Request that Elowen explain the prophecy to you.',
            'Inquire about the Council of Lore and their purpose.'
        ]);
        storyWrapper.appendChild(choiceList);

        const choices = [
            { text: "Read the Tome", value: 'readTome' },
            { text: "Prophecy explained", value:'hearProphecy' },
            { text: "Inquire the Council", value: 'councilPurpose' }
        ];
        createChoiceButtons(choices, storyWrapper);
    } else {
        switch (handleChoice) {
            case 'readTome':
                loadReadTome();
                break;
            case 'hearProphecy':
                loadHearProphecy();
                break;
            case 'councilPurpose':
                loadCouncilPurpose();
                break;
        }
    }

    content.appendChild(storyWrapper);
}

// Read Tome of Convergence Choice
export function loadReadTome() {
    loadBackgroundImage(require('../images/tome-convergence.jpg'));

    const content = document.getElementById('content');
    content.innerHTML = '';

    const storyWrapper = document.createElement('div');
    storyWrapper.classList.add('screen');

    storyWrapper.appendChild(createTitle('Chapter 2: The Prophecy Unveiled'));

    storyWrapper.appendChild(createPathTitle('The Forgotten Ones - Read the Tome of Convergence'));

    storyWrapper.appendChild(createScene('As your fingers brush against the ancient, glowing pages of the Tome, a surge of energy courses through your veins. The world around you dims, and your vision is flooded with knowledge beyond comprehension.'));

    storyWrapper.appendChild(createParagraph('Suddenly, three artifacts materialize before your minds eye, vivid and pulsing with immense power:'));

    const items = [
        { text: "A crown - shimmering with an ethereal light, its surface ripples with the passage of time itself. It pulses with temporal energy, bending reality as if each moment were caught in its grasp." },
        { text: "A chalice - overflowing with a luminous liquid, glowing with the very essence of life. The air around it seems to hum, as if the heartbeat of the world itself is contained within its depths." },
        { text: "A book - its pages rustle as if alive, and within them, entire worlds are written and rewritten. The ink shifts and swirls, holding the secrets of creation itself, realms lost and yet to be born." }
    ];
    const artifactList = createItemList(items, { type: 'ol' });
    storyWrapper.appendChild(artifactList);

    storyWrapper.appendChild(createParagraph('These are the Lost Relics, whispered of in forgotten legends, hidden away eons ago to prevent catastrophe. The vision shows them as keystones in the balance of power between the realms. Their significance weighs heavily upon your mind, for you know now what few others do: the fate of all existence is tied to these artifacts, and they must not fall into the wrong hands.'));

    storyWrapper.appendChild(createParagraph('The Tome then reveals its final secret—a choice. A moment will come when the realms themselves will collide, and only the bearers of these relics will be able to make the decision that could either save or doom them all. The moment of Convergence draws near, and when it does, the power to reshape destiny will rest in your hands.'));

    storyWrapper.appendChild(createParagraph('As the vision fades, your breath catches. You glance down at your palm, where a new mark has appeared, glowing faintly: a spiraling clock face, intricately detailed as if it ticks with the flow of time itself. The weight of your destiny sinks in — you have been chosen. You are the Timeweaver, fated to seek and wield the Crown of Eternity, the first of the Lost Relics.'));

    storyWrapper.appendChild(createVoiceEcho('The knowledge burns within you now. This is your path. The relics must be found, and the fate of all realms rests on the choices that lie ahead. The clock is ticking.'));
    content.appendChild(storyWrapper);
}

// Hear Prophecy Choice
export function loadHearProphecy() {
    loadBackgroundImage(require('../images/library-fire.jpg'));

    const content = document.getElementById('content');
    content.innerHTML = '';

    const storyWrapper = document.createElement('div');
    storyWrapper.classList.add('screen');

    storyWrapper.appendChild(createTitle('Chapter 2: The Prophecy Unveiled'));

    storyWrapper.appendChild(createPathTitle("The Forgotten Ones - Elowen's explanation"));

    storyWrapper.appendChild(createScene('The fire crackled merrily, casting dancing shadows on the stone walls of the ancient library. Elowen, a woman with eyes as deep as the midnight sky, leaned forward, her voice hushed.'));

    storyWrapper.appendChild(createVoiceEcho('"The prophecy speaks of three Lost Relics: the Crown of Eternity, the Chalice of Souls, and the Codex of Realms. These artifacts hold immense power over Time, Life, and Space respectively."'));

    storyWrapper.appendChild(createParagraph('A thrill of anticipation coursed through you as she continued.'));

    storyWrapper.appendChild(createVoiceEcho('"The Convergence will weaken the barriers between realms, allowing these relics to be found. But they must be united by three chosen bearers before the Convergence peaks, or all realms may collapse into chaos."'));

    storyWrapper.appendChild(createParagraph("As Elowen's voice filled the room, a strange tingling sensation began to pulse on your palm. Curiosity piqued, you glanced down, your breath catching in your throat. A symbol, a tree with leaves that seemed to shift and change, had materialized on your skin."));

    storyWrapper.appendChild(createParagraph('A chill ran down your spine as the realization dawned upon you. You had been marked, chosen as the Realm Walker, destined to seek the Codex of Realms.'));

    // TODO: Add logic to go to Chapter 3

    content.appendChild(storyWrapper);
}

// Council's Purpose Choice
export function loadCouncilPurpose() {
    loadBackgroundImage(require('../images/council-chamber.jpg'));

    const content = document.getElementById('content');
    content.innerHTML = '';

    const storyWrapper = document.createElement('div');
    storyWrapper.classList.add('screen');

    storyWrapper.appendChild(createTitle('Chapter 2: The Prophecy Unveiled'));

    storyWrapper.appendChild(createPathTitle('The Forgotten Ones - Inquire the Council'));

    storyWrapper.appendChild(createScene('The ancient library was bathed in the soft glow of flickering torches. A hush fell over the gathered Council members as an elderly figure stepped forward. His eyes, though dimmed by age, held a timeless wisdom.'));

    storyWrapper.appendChild(createVoiceEcho('"We are the guardians of knowledge, preparing for this moment across generations," he began, his voice a low rumble. "Our purpose is to guide those chosen - like you - in their quest to find the Lost Relics and navigate the challenges of the Convergence."'));

    storyWrapper.appendChild(createParagraph('As he spoke, a strange sensation washed over you. A warmth spread from your palm, tingling and pulsing. You looked down, your breath catching in your throat. A symbol, a chalice encircled by ethereal mist, had materialized on your skin.'));

    storyWrapper.appendChild(createParagraph('You had been chosen, marked as the Soul Keeper, destined to seek the Chalice of Souls. A weight, both exhilarating and terrifying, settled upon your shoulders. Your journey had only just begun.'));

    // TODO: Add logic to go to Chapter 3

    content.appendChild(storyWrapper);
}

export default loadChapterTwoElders;