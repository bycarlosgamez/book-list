import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDeleteBook, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const { title, id } = book;

  const handleDeleteClick = () => {
    onDeleteBook(id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  const content = !showEdit ? (
    <h3>{title}</h3>
  ) : (
    <BookEdit book={book} onSubmit={handleSubmit} />
  );

  return (
    <div className='book-show'>
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
