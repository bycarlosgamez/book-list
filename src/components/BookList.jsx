import BookShow from './BookShow';

function BookList({ books, onDeleteBook, onEdit }) {
  const renderedBooks = books.map((book) => (
    <BookShow
      key={book.id}
      book={book}
      onDeleteBook={onDeleteBook}
      onEdit={onEdit}
    />
  ));
  return <div className='book-list'>{renderedBooks}</div>;
}

export default BookList;
