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

// Step 1: Select the <h1> element with id="header" and save it to a variable
const bookStoreTitle = document.getElementById('header');
// Update its text to the store's name from the bookStore object
bookStoreTitle.textContent = bookStore.name;

// Step 2: Select the <ul> with id="book-list" — this is where we'll add each book
const bookList = document.getElementById('book-list');

// Step 3: Loop through every book in the bookStore.books array
bookStore.books.forEach(book => {
    // Create an <li> to act as a container for each book's info
    const bookContainer = document.createElement('li');

    // Create an <h3> for the book title and set its text
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = book.title;

    // Create a <p> for the author name and set its text
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = book.author;

    // Create an <img> for the book cover and set its src to the image URL
    const bookImage = document.createElement('img');
    bookImage.src = book.imageUrl;

    // Nest the title, author, and image inside the <li> container
    bookContainer.append(bookTitle, bookAuthor, bookImage);

    // Add the completed <li> for this book into the <ul> on the page
    bookList.append(bookContainer);
});

// Step 4 (Bonus): Remove the placeholder <li id="delete-this"> from the DOM
document.getElementById('delete-this').remove();
