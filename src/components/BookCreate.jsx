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
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={handleChange} />
      <button>Create!</button>
    </form>
  );
}

export default BookCreate;
