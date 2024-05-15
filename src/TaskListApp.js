import React, { useState } from 'react';

function TaskListApp() {
  // State for managing tasks
  const [tasks, setTasks] = useState([]);
  // State for handling new task input
  const [newTask, setNewTask] = useState('');

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Function to delete a task
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Function to mark a task as completed
  const toggleTaskCompletion = id => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  return (
    <div>
      <h1>Task List</h1>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskListApp;