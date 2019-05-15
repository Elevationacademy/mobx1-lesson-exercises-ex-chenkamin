import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = () => {
    let newLocation = prompt("new location Plaese")
    this.props.store.editItem(this.props.item.name, newLocation )
  }
  deleteItem = () => {
    this.props.store.deleteItem(this.props.item.name)
  }
  //other Methods
  render() {
    let item = this.props.item
    return (
        <div className = {item.completed ? "crossed": null}><input type="checkbox" onClick = {this.checkItem} 
            value={item.name}/> 
            {item.name} 
            <span id="item">  - {item.location}</span>
            <button className="editButton" onClick={this.editItem}>Edit</button>
            <button onClick={this.deleteItem}>Delete</button>
        </div>)
  }
}
export default Item