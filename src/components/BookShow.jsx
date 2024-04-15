function BookShow({ book, onDeleteBook }) {
  const { title, id } = book;

  const handleClick = () => {
    onDeleteBook(id);
  };
  return (
    <div className='book-show'>
      {title}
      <div className='actioms'>
        <button className='delete' onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
