import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      newTask: "",
      list: []
    };
  }

  updateInput(key, value) {
    this.setState({ [key]: value });
  }

  addTask() {
    // creating a new task with an unique id
    const newTask = {
      id: 1 + Math.random(),
      value: this.state.newTask.slice()
    };

    // copy current list of tasks
    const list = [...this.state.list];

    // pushing new task to the list
    list.push(newTask);

    // update state with new list, reset the new task input
    this.setState({
      list,
      newTask: ""
    });
  }

  deleteTask(id) {
    // copying current list of tasks
    const list = [...this.state.list];
    // filter out the task being deleted
    const updatedList = list.filter(task => task.id !== id);

    this.setState({ list: updatedList });
  }

  deleteAll = () => {
    // delete all function that clears all tasks in list array
    this.setState(() => ({list: []}))
  }
  
  render() {
    return (
      <div>
        <h1 className="app-title">ToDoList App</h1>
        <div className="container">
          <input
            type="text"
            placeholder="Enter Task Here"
            value={this.state.newTask}
            onChange={e => this.updateInput("newTask", e.target.value)}/>
          <button
            onClick={() => this.addTask()}
            disabled={!this.state.newTask.length}>Add</button>
          <button 
            id="deleteall" 
            onClick={() => this.deleteAll()}>Delete All</button>
          <ul>
            {this.state.list.map(task => {
              return (
                <i id ="tasks" key={task.id}>
                  <input id="checkbox" type="checkbox"/>
                  <label class="strikethrough" contentEditable="true"><strong>{task.value}</strong></label>
                  <button id="btn" onClick={() => this.deleteTask(task.id)}>X
                  </button>
                  <br></br>
                </i>
              );
            })}
          </ul>
          </div>
        </div>
    );
  }
}

export default App;
