import React from 'react';
import styles from './forms.module.scss';

const TaskForm = () => {
  return (
    <form className={styles.form}>
      <h2>Task Form</h2>
      <label for="newTask">New Task Item</label>
      <input type="text" name="newTask" placeholder="NewTask" />
      <label for="pickList">Add to List:</label>
      <select>
        <option>Default List</option>
        <option>NewList</option>
      </select>
      <button>Add Task</button>
    </form>
  );
};

export default TaskForm;