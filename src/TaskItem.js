import React from "react";
import styles from "./TaskItem.module.scss";

const completedStyle = {
  color: "grey",
  textDecoration: "line-through double rebeccapurple",
  borderColor: "grey"
};

const TaskItem = ({text, complete, clickHandler, deleteHandler, id}) => {
  return (
    <li>
      <button 
        style={complete ? completedStyle:{}}
        className={styles.taskItem}
        onClick={(e) => {clickHandler(id)}}
        type="button"
      >
        {text}
      </button>
      {complete && <button
        className={styles.deleteButton}
        onClick={(e) => {window.confirm("This task item will be deleted forever. Are you sure?") && deleteHandler(id)}}       
        type="button"
      >
        X
      </button>}
    </li>
  );
};

export default TaskItem;