import React, { Component } from 'react';

class Table extends Component{
    render(){
        return <table className="table table-striped">
        <thead>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
        </table>
    }
}

export default Table;