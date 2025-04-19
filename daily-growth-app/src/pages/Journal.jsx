import React, { useState, useEffect } from 'react';

export default function Journal() {
  const [entry, setEntry] = useState('');
  const [message, setMessage] = useState('');
  const [entries, setEntries] = useState([]);

  // On mount, load saved entries
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('journalEntries') || '[]');
    setEntries(saved);
    if (saved.length) {
      setMessage(`You have ${saved.length} entr${saved.length > 1 ? 'ies' : 'y'} saved.`);
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (entry.trim().length < 10) {
      setMessage('Please write at least 10 characters.');
      return;
    }

    const timestamp = new Date().toISOString();
    const newEntry = { text: entry.trim(), date: timestamp };

    // Prepend to local state and to localStorage
    const updated = [newEntry, ...entries];
    setEntries(updated);
    localStorage.setItem('journalEntries', JSON.stringify(updated));

    setMessage('Entry saved!');
    setEntry('');
  };

  return (
    <div className="page journal">
      <h1>Daily Journal</h1>

      {message && <div className="notice">{message}</div>}

      <form onSubmit={handleSubmit} className="journal__form">
        <textarea
          value={entry}
          onChange={e => setEntry(e.target.value)}
          placeholder="What’s on your mind today?"
          minLength={10}
          required
          rows={8}
          className="journal__textarea"
        />

        <button type="submit" className="btn">
          Save Entry
        </button>
      </form>

      {entries.length > 0 && (
        <div className="entries-list">
          <h2>Past Entries</h2>
          <ul>
            {entries.map((e, idx) => (
              <li key={idx} className="entry-item">
                <div className="entry-date">
                  {new Date(e.date).toLocaleString()}
                </div>
                <div className="entry-text">{e.text}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}