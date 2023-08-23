import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import '@fortawesome/fontawesome-svg-core';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className='container'>
      <h1>My Todos:</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setTodos(todos.concat([inputValue]));
                setInputValue("");
              }
            }}
            placeholder="What do you need to do? "
          />
        </li>
        {todos.map((item, index) => (
          <li key={index}>
            <div className="todo-item">
              <span>{item}</span>
              <FontAwesomeIcon
                icon={faTrash}
                style={{ color: "#ffffff" }}
                onClick={() =>
                  setTodos(todos.filter((t, currentIndex) => index !== currentIndex))
                }
              />
            </div>
          </li>
        ))}
      </ul>
      <div className='task'>{todos.length} task</div>
    </div>
  );
}

export default App;
