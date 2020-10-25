import React from "react";
import styles from "./TaskItem.module.scss";

const completedStyle = {
  color: "grey",
  textDecoration: "line-through double rebeccapurple",
  borderColor: "grey"
};

const TaskItem = ({text, complete, clickHandler, id}) => {
  return (
    <li 
      onClick={(e) => {clickHandler(id)}}
      style={complete ? completedStyle:{}}
      className={styles.taskItem}
    >
      {text}
    </li>
  );
};

export default TaskItem;