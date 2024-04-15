import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 999), title },
    ];
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
