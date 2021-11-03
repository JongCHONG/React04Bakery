import React, { Component } from 'react'

class Add extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      price: 0
    }
    
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)
  }

  handleNameChange(e) {
    this.setState({name: e.target.value})
  }
  handlePriceChange(e) {
    this.setState({price: Number(e.target.value)})
  }

  render() {
    const { name, price } = this.state
    return (
      <div className="d-flex flex-column">
        <h1>Add</h1>
        <input 
          type="text" 
          onChange={this.handleNameChange}
        />
        <span>{this.state.price}</span>
        <input
          type="range"
          min="1"
          max="10"
          onChange={this.handlePriceChange}
        />
        <button onClick={() => this.props.addItem(name, price)}>Add</button>
      </div>
    )
  }
}

export default Add