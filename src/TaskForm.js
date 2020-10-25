import React from 'react';
import styles from './forms.module.scss';

class TaskForm extends React.Component { 
  state = {
    taskText: "",
    targetListId: this.props.lists[0] ? this.props.lists[0].id : ""
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {onNewTask, lists} = this.props;
    const {targetListId, taskText} = this.state;
    onNewTask(lists.length === 0 ? null : targetListId, taskText);
    this.setState({
      taskText: "",
      targetListId: this.props.lists[0] ? this.props.lists[0].id : ""
    })
  }
  render = () => {
    const {taskText, targetListId} = this.state;
    const {lists} = this.props;
    return (
      <form className={styles.form} onSubmit={
        this.handleSubmit
      }>
        <h2>Task Form</h2>
        <label htmlFor="newTask">New Task Item</label>
        <input 
          type="text" 
          name="newTask" 
          placeholder="NewTask"
          value={taskText}
          onChange={(e)=>this.setState({
            taskText: e.target.value
          })}
          required
        />
        <label htmlFor="pickList">Add to List:</label>
        <select name="pickList" value={targetListId} onChange={(e)=>this.setState({
          targetListId: e.target.value
        })}>
          {
            lists[0] ? <option value={lists[0].id}>{lists[0].title} (default)</option> : <option value="" disabled>New List</option>
          }
          {
            lists.slice(1).map(list => <option key={list.id} value={list.id}>{list.title}</option>)
          }
        </select>
        <button>Add Task</button>
      </form>
    );
  };
};

export default TaskForm;