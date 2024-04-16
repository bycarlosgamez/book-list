import { useState } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const addBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const delateBookById = (id) => {
    const updatedBooks = books.filter((book) => id !== book.id);
    setBooks(updatedBooks);
  };

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (id === book.id) return { ...book, title: newTitle };

      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList
        books={books}
        onDeleteBook={delateBookById}
        onEdit={editBookById}
      />
      <BookCreate onAddBook={addBook} />
    </div>
  );
}

export default App;
