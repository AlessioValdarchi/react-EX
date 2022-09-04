import React from "react";

export class TodoList extends React.Component {

    state = {
        items: [],
        currItem: ''
    }

    setItem = (event) => {
        this.setState(state => {
            return { currItem: event.target.value }
        })
    }

    addItem = () => {
        if (this.state.currItem) {
            let tmpItems = this.state.items.concat(this.state.currItem);
            this.setState(state => {
                return {
                    items: tmpItems,
                    currItem: ''
                }
            })
        }
    }
    render() {
        return (
            <><ul>
                {this.state.items.map((item, index) => <li key={item + index}>{item}</li>)}
            </ul>
                <input onChange={this.setItem} name="text" value={this.state.currItem} />
                <button onClick={this.addItem}>Add Item</button></>)
    }
}