export function createAct(text, className = 'title') {
    const act = document.createElement('h1');
    act.classList.add(className);
    act.textContent = text;
    return act;
}

export function createTitle(text, className = 'chapter-title') {
    const title = document.createElement('h2');
    title.classList.add(className);
    title.textContent = text;
    return title;
}

export function createScene(text, className = 'info') {
    const scene = document.createElement('p');
    scene.classList.add(className);
    scene.textContent = text;
    return scene;
}

export function createParagraph(text, className = 'narrative') {
    const paragraph  = document.createElement('p');
    paragraph.classList.add(className);
    paragraph.textContent = text;
    return paragraph;
}

export function createQuestion(text, className = 'choice-section') {
    const question = document.createElement('p');
    question.classList.add(className);
    question.textContent = text;
    return question;
}

export function createChoiceList(choices) {
    const choiceList = document.createElement('ol');
    choiceList.className = 'choice-list';
    choices.forEach(choice => {
        const listItem = document.createElement('li');
        listItem.textContent = choice;
        choiceList.appendChild(listItem);
    });
    return choiceList;
}

export function createContinueButton(text, callback) {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add('choice-button');
    button.addEventListener('click', callback);
    return button;
}