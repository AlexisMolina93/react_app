import React, { Component } from 'react';

class Task extends Component{
    render(){
        const {task} = this.props;
        return <tr>
            <td>{task.id}</td>
            <td>{task.title}</td>
            <td>{task.description}</td> 
            <td><button className="btn btn-primary">Delete</button></td>
        </tr>
    }
}

export default Task;