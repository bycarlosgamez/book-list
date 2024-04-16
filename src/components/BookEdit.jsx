import { useState, useContext } from 'react';
import BooksContext from '../context/books';

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const { editBookById } = useContext(BooksContext);

  const handleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();

    onSubmit();
    editBookById(book.id, title);
  };

  return (
    <form className='book-edit' onSubmit={hanldeSubmit}>
      <label>Title</label>
      <input className='input' value={title} onChange={handleChange} />
      <button className='button is-primary'>Save</button>
    </form>
  );
}

export default BookEdit;
