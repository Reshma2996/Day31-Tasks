import React from 'react';

const BookList = ({ books }) => {
  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>Title:</strong> {book.title}, <strong>Author:</strong> {book.author}, <strong>ISBN:</strong> {book.isbn}, <strong>Publication Date:</strong> {book.publicationDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
