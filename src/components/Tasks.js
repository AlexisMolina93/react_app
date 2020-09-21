import React , { Component } from 'react';
import Task from './Task.js';

class Tasks extends Component{
    renderTable(){
        return <table className="table table-striped">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
                </thead><tbody> 
                    {this.props.tasks.map(task => <Task task={task} key={task.id}/>)}
                </tbody>
                </table>
    }
    render(){
        return this.renderTable()
    }
}

export default Tasks;