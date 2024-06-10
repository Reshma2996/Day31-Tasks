import React from 'react';

const AuthorList = ({ authors }) => {
  return (
    <div>
      <h2>Authors</h2>
      <ul>
        {authors.map((author, index) => (
          <li key={index}>
            <strong>Name:</strong> {author.name}, <strong>Birth Date:</strong> {author.birthDate}, <strong>Biography:</strong> {author.biography}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
