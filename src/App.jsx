import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
  const [books, setBooks] = useState([]);

  const handleSubmit = (title) => {
    console.log(`Add book titled: ${title}`);
  };

  return (
    <>
      <BookCreate onSubmit={handleSubmit} />
    </>
  );
}

export default App;
