import React, {Component} from 'react';
import './App.css';
import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';

// Components
import TaskForm from './components/TaskForm';

class App extends Component{

  state = {
    tasks:tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title : title,
      description : description,
      id: this.state.tasks.length
    }
    this.setState({ 
     tasks:[...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    this.state.tasks.filter(task => task.id !== id)
  }

  render(){
    return(  
    <div>
      <TaskForm addTask={this.addTask}/>
      <Tasks tasks={this.state.tasks}/>
    </div>
    )
  }
}

export default App;
