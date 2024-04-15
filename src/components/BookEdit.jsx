import { useState } from 'react';

function BookEdit({ book, onEdit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();

    onEdit(book.id, title);
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
