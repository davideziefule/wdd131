const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const books = [
    '1 Nephi',
    '2 Nephi',
    'Jacob',
    'Enos',
    'Jarom',
    'Omni',
    'Words of Mormon',
    'Mosiah',
    'Alma',
    'Helaman',
    '3 Nephi',
    '4 Nephi',
    'Mormon',
    'Ether',
    'Moroni'
];

// const li = document.createElement('li');

// const deleteButton = document.createElement('button');

// li.textContent = input.value;

// deleteButton.textContent = '❌';

// deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

// li.append(deleteButton);

// list.append(li);


button.addEventListener('click', () => {

    const chapter = input.value.trim();

    // Validate Book of Mormon book name
    const isValidBook = books.some(book =>
        chapter.toLowerCase().startsWith(book.toLowerCase())
    );

    if (chapter !== '' && isValidBook) {

        // Limit list to 10 chapters
        if (list.children.length >= 10) {
            alert('You can only add 10 favorite chapters.');
            input.focus();
            return;
        }
            
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = chapter;

        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${chapter}`);

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        input.value = '';

    } else {
        alert('Please enter a valid Book of Mormon chapter (e.g., Alma 5, Mosiah 2, 1 Nephi 3).');
    }

    input.focus();
});