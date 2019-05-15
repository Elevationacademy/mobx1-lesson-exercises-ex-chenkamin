import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
    checkItem = () => {
        //your code here
      }
      editItem = () => {
        //your code here
      }
      deleteItem = () => {
        //your code here
      }
    render() {
        return (
            <div className ={this.props.item.completed ? "crossed": null}>
      {/*   your code here
            each item should be in an input checkbox
            it should display the item name and location
            it should have both an edit button and a delete button
      */} 
      <input type="checkbox" value={this.props.item}/>{this.props.item.name}
            </div>)
    }
}

export default Item