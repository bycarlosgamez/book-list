import { createContext, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost/3001/books');
    setBooks(response.data);
  };

  const addBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const delateBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => id !== book.id);
    setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (id === book.id) return { ...book, ...response.data };

      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, addBook, delateBookById, editBookById }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
