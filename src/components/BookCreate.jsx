import { useState, useContext } from 'react';
import BooksContext from '../context/books';

function BookCreate({ onAddBook }) {
  const [title, setTitle] = useState('');
  const { addBook } = useContext(BooksContext);

  const handleChange = (e) => {
    const value = e.target.value;

    setTitle(value);
  };

  const handleAddBook = (e) => {
    e.preventDefault();

    addBook(title);

    setTitle('');
  };

  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={handleAddBook}>
        <label className='label'>Title</label>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button'>Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
