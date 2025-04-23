import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function GoalTracker() {
  const [text, setText] = useState('');
  const [goals, setGoals] = useState([]);

  // Load goals from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('goals') || '[]');
    setGoals(saved);
  }, []);

  // Persist whenever goals change
  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  const addGoal = e => {
    e.preventDefault();
    if (!text.trim()) return;    // simple validation
    const newGoal = {
      id: uuidv4(),
      text: text.trim(),
      completed: false,
      completedAt: null,
      createdAt: new Date().toISOString(),
    };
    setGoals([newGoal, ...goals]);
    setText('');
  };

  const toggleComplete = id => {
    setGoals(goals.map(g => {
      if (g.id !== id) return g;
      const now = new Date().toISOString();
      return {
        ...g,
        completed: !g.completed,
        completedAt: g.completed ? null : now,
      };
    }));
  };

  return (
    <div className="page tracker">
      <h1>Goal Tracking</h1>

      <form onSubmit={addGoal} className="tracker__form">
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Enter a new goal"
          className="tracker__input"
        />
        <button type="submit" className="btn">Add Goal</button>
      </form>

      {goals.length > 0 ? (
        <ul className="tracker__list">
          {goals.map(goal => (
            <li
              key={goal.id}
              className={`tracker__item ${goal.completed ? 'tracker__item--done' : ''}`}
            >
              <label>
                <input
                  type="checkbox"
                  checked={goal.completed}
                  onChange={() => toggleComplete(goal.id)}
                />
                <span className="tracker__text">{goal.text}</span>
              </label>
              {goal.completedAt && (
                <div className="tracker__date">
                  Completed on {new Date(goal.completedAt).toLocaleDateString()}
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="tracker__empty">No goals yet. Add one above!</p>
      )}
    </div>
  );
}