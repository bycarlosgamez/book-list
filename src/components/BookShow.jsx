function BookShow({ book }) {
  const { title } = book;
  return <div className='book-show'>{title}</div>;
}

export default BookShow;
