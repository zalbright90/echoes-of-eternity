export function createItemList (items, options = {}) {
    const listType = options.type === 'ul' ? 'ul' : 'ol';
    const className = options.className || 'knowledge-list';

    const itemList = document.createElement(listType);
    itemList.classList.add(className);

    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.text;
        itemList.appendChild(listItem);
    });
    return itemList;
}