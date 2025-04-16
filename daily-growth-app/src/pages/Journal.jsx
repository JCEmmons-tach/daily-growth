import React, { useState } from 'react';

function Journal() {
  const [entry, setEntry] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (entry.trim().length < 10) {
      alert('Please write at least 10 characters.');
      return;
    }
    // TODO: save `entry` (e.g. localStorage or API)
    console.log('Saved journal entry:', entry);
    setEntry('');
    alert('Entry saved!');
  };

  return (
    <div className="page journal">
      <h1 className="journal__title">Daily Journal</h1>
      <form onSubmit={handleSubmit} className="journal__form">
        <textarea
          className="journal__textarea"
          value={entry}
          onChange={e => setEntry(e.target.value)}
          placeholder="What’s on your mind today?"
          required
          minLength={10}
        />
        <button type="submit" className="btn">
          Save Entry
        </button>
      </form>
    </div>
  );
}

export default Journal;