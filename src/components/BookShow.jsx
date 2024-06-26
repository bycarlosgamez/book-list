import { useState } from 'react';
import BookEdit from './BookEdit';
import useBooksContext from '../hooks/useBooksContext';

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);

  const { delateBookById } = useBooksContext;

  const { title, id } = book;

  const handleDeleteClick = () => {
    delateBookById(id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  const content = !showEdit ? (
    <h3>{title}</h3>
  ) : (
    <BookEdit book={book} onSubmit={handleSubmit} />
  );

  return (
    <div className='book-show'>
      <img alt='books' src={`https://picsum.photos/seed/${id}/300/200`} />
      <div>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>
          Edit
        </button>
        <button className='delete' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
