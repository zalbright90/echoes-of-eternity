document.addEventListener('DOMContentLoaded', function() {
    const characterForm = document.getElementById('character-form');
    const playerClassSelect = document.getElementById('player-class');
    const classTooltip = document.getElementById('class-tooltip');

    document.querySelectorAll('#player-class option').forEach(option => {
        option.textContent = option.dataset.icon + ' ' + option.textContent;
      });

    const classDescriptions = {
        'knight': {
            title: 'Noble Knight',
            description:'Born into nobility, you have trained in combat and chivalry since childhood. Your path may lead you to uncover corruption within the court, challenging your notions of honor and duty. Will you uphold your family legacy or forge a new definition of nobility?',
            skills:['Leadership', 'Diplomacy', 'Swordsmanship', 'Jousting'],
            equipment:['Plate armor', 'Longsword', 'Shield', 'Lance']
        },
        'scholar': {
            title: 'Arcane Scholar',
            description: 'A magical prodigy from a wealthy family, you have studied at the most prestigious academy. Your thirst for knowledge could uncover long-lost magics with the power to reshape the world. How will you wield your arcane discoveries?',
            skills: ['Spellcasting', 'Enchanting', 'Alchemy', 'Ancient Languages'],
            equipment: ['Robes', 'Spellbook', 'Wand', 'Potions']
        },
        'ranger': {
            title: 'Ranger of the Wilds',
            description: 'Though born to nobility, your heart belongs to the forest. Trained by nature itself, you stand as a guardian of the wilds. Your journey may see you mediating between the ever-expanding human world and the ancient spirits of the land. Where will your allegiances lie when these worlds collide?',
            skills: ['Archery', 'Tracking', 'Herbalism', 'Animal Handling'],
            equipment: ['Leather armor', 'Longbow', 'Quiver', 'Hunting knife']
        },
        'cleric': {
            title: 'Cleric of Light',
            description: 'Chosen by divine forces, you have dedicated your life to serving the gods. As you spread your teachings and combat darkness, you may face challenges that test the very foundations of your faith. How will you interpret your holy mission in a world of moral ambiguity?',
            skills: ['Healing', 'Blessings', 'Incantation', 'Divination'],
            equipment: ['Holy symbol', 'Staff', 'Grimoire', 'Herbs and Oils']
        },
        'adventurer': {
            title: 'Merchant Adventurer',
            description: 'Heir to a trading empire, you seek more than just gold — you crave adventure and discovery. Your travels will open new trade routes and uncharted territories, but also moral dilemmas. Can you balance profit with ethics in lands far from home?',
            skills: ['Trading', 'Persuasion', 'Navigation', 'Appraisal'],
            equipment: ['Traveling cloak', 'Ledger', 'Coin purse', 'Exotic goods']
        },
        'blacksmith': {
            title: 'The Blacksmith Apprentice',
            description: 'Rising from humble beginnings, your exceptional skill with metal sets you apart. Your craftsmanship could forge legends—and attract both fame and danger. How will you shape your destiny when opportunity and peril come hand in hand?',
            skills: ['Smithing', 'Metalworking', 'Weapon maintenance', 'Endurance'],
            equipment: ['Hammer', 'Small anvil', 'Leather apron', 'Basic tools']
        },
        'mage': {
            title: 'Hedge Mage',
            description: 'A self-taught magic user from peasant stock, you havve honed your talents in secret. Your unconventional methods challenge the magical establishment, but may also unveil mysteries about your own origins. Will you revolutionize the arcane world or be consumed by its secrets?',
            skills: ['Minor spellcasting', 'Potion brewing', 'Herbalism', 'Lore'],
            equipment: ['Simple robes', 'Potion ingredients', 'Wand', 'Spellbook']
        },
        'thief': {
            title: 'Charlatan',
            description: 'Raised on the streets, your wit and guile are your greatest assets. Your schemes could lead to untold riches or unforeseen consequences. As you navigate ever-larger cons, will you choose profit or redemption when the stakes are highest?',
            skills: ['Deception', 'Sleight of Hand', 'Persuasion', 'Disguise', 'Forgery', 'Insight', 'Stealth'],
            equipment: ['Dagger', 'Lockpicks', 'Dark clothing', 'Stolen goods']
        }
    };

    function showTooltip(classInfo) {
        const tooltip = document.getElementById('class-tooltip');
        const container = document.querySelector('.container-char');
    
        // Populate tooltip content
        tooltip.innerHTML = `
            <h3>${classInfo.title}</h3>
            <p>${classInfo.description}</p>
            <h4>Skills:</h4>
            <ul>${classInfo.skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
            <h4>Equipment:</h4>
            <ul>${classInfo.equipment.map(item => `<li>${item}</li>`).join('')}</ul>
        `;
    
        // Show tooltip
        tooltip.classList.add('show');

        setTimeout(scrollToTooltip, 50);
    
        // Expand container
        const tooltipHeight = tooltip.offsetHeight;
        container.style.height = `calc(100% + ${tooltipHeight}px)`;
    }

    function scrollToTooltip() {
        const tooltip = document.getElementById('class-tooltip');
        const tooltipTop = tooltip.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({top: tooltipTop, behavior: 'smooth'});
    }

    function hideTooltip() {
        const tooltip = document.getElementById('class-tooltip');
        const container = document.querySelector('.container-char');
    
        // Hide tooltip
        tooltip.classList.remove('show');
    
        // Reset container height
        container.style.height = '100%';
    }
    
    playerClassSelect.addEventListener('change', function() {
        const selectedClass = this.value;
        if (selectedClass && classDescriptions[selectedClass]) {
            showTooltip(classDescriptions[selectedClass]);
        } else {
            hideTooltip();
        }
    });

    characterForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const playerName = document.getElementById('player-name').value;
        const playerClass = playerClassSelect.value;

        const character = {
            name: playerName,
            class: playerClass
        };

    document.getElementById('player-class').addEventListener('change', function() {
        const selectedClass = this.value;
        if (selectedClass && classDescriptions[selectedClass]) {
            showTooltip(classDescriptions[selectedClass]);
        } else {
            hideTooltip();
        }

        localStorage.setItem('character', JSON.stringify(character));
        window.location.href = 'game.html';
        });
    });
});