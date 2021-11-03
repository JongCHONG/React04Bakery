import React, { Component } from 'react'
import Button from './components/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      activeTab: "add",
      items: []
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick(e) {
    this.setState({activeTab: e.target.value})
    // console.log(e.target.value)
  }

  render() {
    console.log(this.state)
    return (
      <div className="container py-3">
        <Button 
          handleClick={this.handleButtonClick}
          isSelected={this.state.activeTab}
        />
      </div>
    )
  }
}

export default App