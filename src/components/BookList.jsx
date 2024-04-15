import BookShow from './BookShow';

function BookList({ books, onDeleteBook }) {
  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} book={book} onDeleteBook={onDeleteBook} />
  ));
  return <div className='book-list'>{renderedBooks}</div>;
}

export default BookList;
