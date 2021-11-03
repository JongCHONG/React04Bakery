import React, { Component } from 'react'

class Button extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-outline-primary mx-1">Add</button>
                <button type="button" className="btn btn-outline-primary mx-1">List</button>
                <button type="button" className="btn btn-outline-primary mx-1">Pay</button>
            </div>
        )
    }
}

export default Button
