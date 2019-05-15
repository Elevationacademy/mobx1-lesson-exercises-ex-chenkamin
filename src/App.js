import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';
import Item from './components/Item';

@observer
class App extends Component {

  handleChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem = () => {
    this.props.store.addItem(this.state.newItem)
  }

  render() {
    // console.log(this.props.store.list)
    return (
      <div className="App"><input onChange = {this.handleChange}/><button onClick = {this.addItem}>Add</button>
          {this.props.store.list.map((s,i) => <Item item={s} key={i}/>)}
      </div>
    );
  }
}


export default App;
