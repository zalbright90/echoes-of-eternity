    let currentChapter = 0;
    const chapters = [
        {
            text: "You walk outside of the pub...",
            options: ["Explore the town", "Seek out an adventure", "Leave this town"]
        },
    ];

    export function getCurrentChapter() {
        return chapters[currentChapter];
    }

    // Function progressing story based on decisions
    export function progressStory(decision) {
        currentChapter++;
        if (currentChapter >= chapters.length) {
            currentChapter = 0;
        }
        return getCurrentChapter();
    }

    // Function to generate options for the player
    export function generateOptions(currentStory) {
        // Placeholder
        return getCurrentChapter().options;
    }
