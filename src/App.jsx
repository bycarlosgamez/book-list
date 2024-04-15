import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const handleSubmit = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 999), title },
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className='app'>
      <BookList books={books} />
      <BookCreate onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
