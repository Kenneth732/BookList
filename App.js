// Create an empty array to store books
let bookList = [];

// Select the form element and add a submit event listener
document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the values entered in the form fields
    let title = document.querySelector('#titleInput').value;
    let author = document.querySelector('#authorInput').value;

    // Create a new book object
    let newBook = {
        title: title,
        author: author,
        read: false
    };

    // Add the new book to the bookList array
    bookList.push(newBook);

    // Call a function to handle displaying the books
    displayBooks(bookList);

    // Reset the form fields
    document.querySelector('#titleInput').value = '';
    document.querySelector('#authorInput').value = '';
});

// Function to display the books
function displayBooks(books) {
    // Get the element where the book list will be displayed
    let bookListElement = document.getElementById('bookList');

    // Clear any existing content
    bookListElement.innerHTML = '';

    // Iterate over the books array and generate HTML for each book
    books.forEach(book => {
        let bookElement = document.createElement('div');
        bookElement.innerHTML = `
            <h3>Title: ${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Status: ${book.read ? 'Read' : 'Unread'}</p>
        `;
        bookListElement.appendChild(bookElement);
    });
}

// Call the displayBooks function initially to show any existing books
displayBooks(bookList);
