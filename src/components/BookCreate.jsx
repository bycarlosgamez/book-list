import { useState } from 'react';

function BookCreate({ onSubmit }) {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;

    setTitle(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(title);

    setTitle('');
  };

  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label className='label'>Title</label>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button'>Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
