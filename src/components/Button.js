import React, { Component } from 'react'

class Button extends Component {
    render() {
        // console.log(this.props)
        const { handleClick, isSelected } = this.props
        return (
            <div>
                <button 
                    type="button" 
                    className={`btn btn-outline-primary mx-1 ${isSelected === "add" && 'bg-primary text-white'}`}
                    onClick={handleClick}
                    value="add"
                >
                    Add
                </button>
                <button 
                    type="button" 
                    className={`btn btn-outline-primary mx-1 ${isSelected === "list" && 'bg-primary text-white'}`}
                    onClick={handleClick}
                    value="list"
                >
                    List
                </button>
                <button 
                    type="button" 
                    className={`btn btn-outline-primary mx-1 ${isSelected === "pay" && 'bg-primary text-white'}`}
                    onClick={handleClick}
                    value="pay"
                >
                    Pay
                </button>
            </div>
        )
    }
}

export default Button
