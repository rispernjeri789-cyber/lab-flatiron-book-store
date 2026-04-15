const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!

1. //HEADER MANIPULATION
 //Points to the <h1> by ID and updates it with the store name.

const mainHeader = document.querySelector('#header');
mainHeader.textContent = bookStore.name;

/**
 * 2. SELECT THE CONTAINER & CLEANUP
 * Finds the <ul> where books live and removes the static example.
 */
const bookList = document.querySelector('#book-list');
const placeholder = document.querySelector('#delete-this');

if (placeholder) {
    placeholder.remove();
}

/**
 * 3. DYNAMIC RENDERING
 * Loops through the library to build and append book cards.
 */
bookStore.books.forEach(book => {
    // Create the list item wrapper
    const li = document.createElement('li');

    // Create and fill the Title
    const h3 = document.createElement('h3');
    h3.textContent = book.title;

    // Create and fill the Author
    const p = document.createElement('p');
    p.textContent = book.author;

    // Create and configure the Image
    const img = document.createElement('img');
    img.src = book.imageUrl;
    img.alt = book.title;

    // ASSEMBLE: Add elements to the li in order
    li.append(h3, p, img);

    // ATTACH: Add the finished li to the book-list <ul>
    bookList.append(li);
});
