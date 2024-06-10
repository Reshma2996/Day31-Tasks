import React, { useState } from 'react';
import BookForm from './BookForm';
import AuthorForm from './AuthorForm';
import BookList from './BookList';
import AuthorList from './AuthorList';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const addAuthor = (author) => {
    setAuthors([...authors, author]);
  };

  return (
    <div className="dashboard">
      <BookForm onAddBook={addBook} />
      <AuthorForm onAddAuthor={addAuthor} />
      <BookList books={books} />
      <AuthorList authors={authors} />
    </div>
  );
};

export default Dashboard;
