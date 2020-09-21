import React, { Component } from 'react';

export default class TaskForm extends Component{

    state = {
        title : '',
        description : ''
    }

    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault();
    }

    onChange = e => {
        this.setState({ 
            [e.target.name] : e.target.value
        })
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input name="title" value={this.state.title} onChange={this.onChange} className="form-control" type="text" placeholder="Ingresa titulo"></input>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea name="description" value={this.state.description} onChange={this.onChange} className="form-control" placeholder="Ingresa descripcion"></textarea>
                </div>
                <input type="submit" className="btn btn-primary"/>
            </form>
        )
    }
}