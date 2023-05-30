let bookList = [];

document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();

        // Get the values entered in the form fields
    let title = document.getElementById('titleInput').value;
    let author = document.getElementById('authorInput').value;

    let newBook = {
        title: title,
        author: author,
        read: false
    }

    bookList.push(newBook)

    displayBooks(bookList)

    document.querySelector('#titleInput').value = '';
    document.querySelector('#authorInput').value = '';
});

function displayBooks(books){
    let bookListElement = document.querySelector('#bookList')
    bookListElement.innerHTML = '';

    books.map(book => {
        let bookElement = document.createElement('div');
        bookElement.innerHTML = `
            <h3>Title: ${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Status: ${book.read ? 'Read' : "Unread" }</p>
        `;
        document.querySelector('#bookList').appendChild(bookElement)
    });
}