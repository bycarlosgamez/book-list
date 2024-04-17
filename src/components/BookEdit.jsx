import { useState } from 'react';
import useBooksContext from '../hooks/useBooksContext';

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const { editBookById } = useBooksContext();

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
