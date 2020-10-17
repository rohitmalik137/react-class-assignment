import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from '../book-card/book-card.component';

import './books.styles.css';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  return (
    <div className="booksContainer">
      {books.map((book) => {
        return (
          <BookCard
            key={book.id}
            name={book.name}
            imageUrl={book.imageUrl}
            description={book.description}
            price={book.price}
            book={book}
          />
        );
      })}
    </div>
  );
};

export default Books;
