import React from 'react'
const toDoItems = [
    {
      name: 'Click "Create" to create new task',
      completed: false
    },
    {
      name: 'Click "Edit" to edit task',
      completetd: false
    },
    {
      name: 'Click "Delete" to remove task',
      completed: false
    },
    {
      name: "Click on task to mark as complete",
      completed: false
    }
  ];
  
  export default class CreateItem extends React.Component {
    handleCreate(e) {
      e.preventDefault();
      
      if (!this.refs.newItemInput.value) {
        alert('Please enter a task name.');
        return;
      } else if (this.props.toDoItems.map(element => element.name).indexOf(this.refs.newItemInput.value) != -1) {
        alert('This task already exists.');
        this.refs.newItemInput.value = '';
        return;
      }
      
      this.props.createItem(this.refs.newItemInput.value);
      this.refs.newItemInput.value = '';
    }
    
    render() {
      return (
        <div className="create-new">
          <form onSubmit={this.handleCreate.bind(this)}>
            <input type="text" placeholder="New Task" ref="newItemInput" />
            <button>Create</button>
          </form>
        </div>
      );
    }
  }