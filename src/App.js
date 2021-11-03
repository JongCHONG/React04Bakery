import React, { Component } from 'react'
import Button from './components/Button'
import Add from './components/Add'
import List from './components/List'
import Pay from './components/Pay'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      activeTab: "add",
      items: []
    }
    
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  handleButtonClick(e) {
    this.setState({activeTab: e.target.value})
  }
  addItem(name, price) {
    const newItem = {
      name: name,
      price: price
    }
    this.setState({items: [...this.state.items, newItem]})
  }

  render() {
    console.log(this.state)
    return (
      <div className="container py-3">
        <Button 
          handleClick={this.handleButtonClick}
          isSelected={this.state.activeTab}
        />
        {this.state.activeTab === "add" && <Add addItem={this.addItem}/>}
        {this.state.activeTab === "list" && <List items={this.state.items}/>}
        {this.state.activeTab === "pay" && <Pay />}
      </div>
    )
  }
}

export default App