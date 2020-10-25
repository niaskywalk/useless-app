import React from "react";
import styles from "./TaskCard.module.scss";
import TaskItem from "./TaskItem";

const TaskCard = ({listData, toggleTaskItem}) => {
  return (
    <section className={styles.taskCard}>
      <header className={styles.cardHeader}>
        <h2>{listData.title}</h2>
        <p>{listData.description}</p>
      </header>
      <ul>
        {
          listData.taskItems.map(item => 
          <TaskItem 
            key={item.id} 
            clickHandler={(itemID)=> {
              toggleTaskItem(listData.id, itemID)
            }}
            {...item} 
          />)
        }
        
      </ul>
    </section>
  );
};

export default TaskCard;