import React, { Component } from 'react';
class ListItem extends Component {
    state = { 

    }

    render() { 
        const data = this.props.data
        const value = data.title
        const onEditTask = this.props.onEditTask
        const val = this.props.val
        const onToggleListItem = this.props.onToggleListItem
        const onDeleteTask = this.props.onDeleteTask
        return ( 
            <li>
                <div>
                    <input checked={this.props.data.isComplete} val={val} type="checkbox" onChange={onToggleListItem} />
                    <input value={value} onChange={onEditTask} val={val}></input>
                    <button onClick={()=> onDeleteTask(val)}> x </button>
                </div>
            </li>
         );
    }
}
 
export default ListItem;