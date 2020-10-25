import React from 'react';
import uuid from 'react-uuid';
import './App.css';
import TaskCard from './TaskCard';
import AppHeader from './AppHeader';
import ListForm from './ListForm';
import TaskForm from './TaskForm';


class App extends React.Component {
  state = {
    lists: [{
      id: "1",
      taskItems: [{
        id: "1",
        text: "Make ice cream",
        complete: false
      }, {
        id: "2",
        text: "Buy junk food",
        complete: false
      }, {
        id: "3",
        text: "Go to bed",
        complete: true
      }, {
        id: "4",
        text: "Jump on the bed",
        complete: false
      }],
      title: "Do this Tomorrow",
      description: "Describe this List"
    },{
      id: "2",
      taskItems: [{
        id: "1",
        text: "Make ice cream",
        complete: false
      }, {
        id: "2",
        text: "Eat junk food",
        complete: false
      }, {
        id: "3",
        text: "Go to bed",
        complete: true
      }],
      title: "Do this today",
      description: "Describe this List"
    },{
      id: "3",
      taskItems: [{
        id: "1",
        text: "Make ice cream",
        complete: false
      }, {
        id: "2",
        text: "Buy junk food",
        complete: false
      }, {
        id: "3",
        text: "Go to bed",
        complete: true
      }],
      title: "Do this today",
      description: "Describe this List"
    },{
      id: "4",
      taskItems: [{
        id: "1",
        text: "Make ice cream",
        complete: false
      }, {
        id: "2",
        text: "Buy junk food",
        complete: false
      }, {
        id: "3",
        text: "Go to bed",
        complete: true
      }],
      title: "Do this Never",
      description: "Describe this List"
    }]
  }
  
  toggleTaskItem = (listID, taskID) => {
    const {lists} = this.state;
    const listIndex = lists.findIndex(list => list.id === listID);
    if (listIndex < 0) {
      throw new Error("List ID Not Found");
    };
    const foundList = lists[listIndex];
    const taskIndex = foundList.taskItems.findIndex(task => task.id === taskID);
    if (taskIndex < 0) {
      throw new Error("Task ID Not Found");
    }
    const foundTask = foundList.taskItems[taskIndex];

    const modifiedList = {
      ...foundList,
      taskItems: [
        ...foundList.taskItems.slice(0, taskIndex),
        {
          ...foundTask,
          complete: !foundTask.complete
        },
        ...foundList.taskItems.slice(taskIndex+1)
      ]
    };

    const newState = {
      ...this.state,
      lists: [
        ...lists.slice(0, listIndex),
        modifiedList,
        ...lists.slice(listIndex+1)
      ]
    }
    this.setState(newState);
  } 

  addNewList = (listName, listDesc, initialItem) => {
    listName = listName || "New List";
    listDesc = listDesc || "Description of new list";
    const newList = {
      id: uuid(),
      taskItems: initialItem ? [{
        id: uuid(),
        text: initialItem,
        complete: false
      }] : [],
      title: listName,
      description: listDesc
    };

    const {lists} = this.state;

    const newState = {
      ...this.state,
      lists: [...lists, newList]
    };

    this.setState(newState);

  }

  removeList = (listID) => {
    const {lists} = this.state;
    const listIndex = lists.findIndex(list => list.id === listID);
    if (listIndex === -1) {
      throw new Error("Cannot remove list. List not found.");
    }
    const newState = {
      ...this.state,
      lists: [
        ...lists.slice(0,listIndex),
        ...lists.slice(listIndex+1)
      ]
    }

    this.setState(newState);
  }

  addNewTask = (listID, taskText) => {
    const {lists} = this.state;
    listID = listID || (lists[0] && lists[0].id);
    if (!listID) {
      this.addNewList(null, null, taskText);
    } else {
      const listIndex = lists.findIndex(list => list.id === listID);
      if (listIndex === -1) {
        throw new Error(`Cannot find List ID: ${listID} `);
      }
      const foundList = lists[listIndex];
      const newState = {
        ...this.state,
        lists: [
          ...lists.slice(0,listIndex),
          {
            ...foundList,
            taskItems: [
              ...foundList.taskItems,
              {
                id: uuid(),
                text: taskText,
                complete: false
              }
            ]
          },
          ...lists.slice(listIndex+1)
        ]
      }
      this.setState(newState);
    }

  }

  render () {
    const {lists} = this.state;
    return (
      <div className="appWrapper">
        <AppHeader />
        <main className="appTaskWrapper">
          {this.state.lists.map(list => 
            <TaskCard 
              key={list.id}
              toggleTaskItem={this.toggleTaskItem} 
              listData={list}
              onDelete={this.removeList}
            />
          )}
        </main>
        <ListForm onNewList={this.addNewList} />
        <TaskForm onNewTask={this.addNewTask} lists={lists} />
      </div>
    );
  }
}

export default App;
