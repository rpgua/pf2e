// See ../lib/source.json
// If empty, all books are active
// export const ACTIVE_BOOKS_IDS = [2];

const sourceJson = await import("../lib/source.json");

// const legacyBooks = sourceJson.default.filter((book) => book.id < 205).map((book) => book.id);

const remasterBooks = sourceJson.default.filter((book) => book.id >= 205).map((book) => book.id);

export const ACTIVE_BOOKS_IDS = [
    // ...legacyBooks, 
    // ...remasterBooks,
    216, // Player Core
    218, // GM Core
    221, // Monster Core
    227, // Player Core 2
    236, // NPC Core
];
