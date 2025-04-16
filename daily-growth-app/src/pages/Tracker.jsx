import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function GoalTracker() {
  const [goals, setGoals] = useState([]);
  const [text, setText] = useState('');

  const addGoal = e => {
    e.preventDefault();
    if (!text.trim()) {
      alert('Please enter a goal.');
      return;
    }
    setGoals(prev => [
      ...prev,
      { id: uuidv4(), text: text.trim(), completed: false }
    ]);
    setText('');
  };

  const toggleComplete = id => {
    setGoals(prev =>
      prev.map(goal =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  return (
    <div className="page tracker">
      <h1 className="tracker__title">Goal Tracking</h1>
      <form onSubmit={addGoal} className="tracker__form">
        <input
          type="text"
          className="tracker__input"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Enter a new goal"
          required
        />
        <button type="submit" className="btn">
          Add Goal
        </button>
      </form>

      <ul className="tracker__list">
        {goals.map(goal => (
          <li
            key={goal.id}
            className={`tracker__item ${goal.completed ? 'tracker__item--done' : ''
              }`}
          >
            <label>
              <input
                type="checkbox"
                checked={goal.completed}
                onChange={() => toggleComplete(goal.id)}
              />
              {goal.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoalTracker;