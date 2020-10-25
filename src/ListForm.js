import React from 'react';
import styles from './forms.module.scss';

class ListForm extends React.Component {
  state = {
    title: "",
    description: ""
  };
  render = () => {
    const {title, description} = this.state;
    const {onNewList} = this.props;

    return (
      <form className={styles.form} onSubmit={(e)=>{
        e.preventDefault();
        onNewList(title, description);
        this.setState({
          title: "",
          description: ""
        })
      }}>
        <h2>List Form</h2>
        <label htmlFor="newList">New List Name:</label>
        <input 
          type="text" 
          name="newList" 
          placeholder="NewList"
          onChange={(e)=>{
            this.setState({
              title: e.target.value
            })
          }}
          value={title}
        />
        <label htmlFor="listDesc">Description:</label>
        <input 
          type="text" 
          name="listDesc" 
          placeholder="Describe this List"
          onChange={(e)=>{
            this.setState({
              description: e.target.value
            })
          }}
          value={description} 
        />
        <button>Make New List</button>
      </form>
    );
  };
};

export default ListForm;