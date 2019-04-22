import React, { Component } from 'react';
import ListItem from './ListItem';
class List extends Component {
    state = {  }
    render() { 
        const list = this.props.data
        const onDeleteTask = this.props.onDeleteTask
        const onEditTask = this.props.onEditTask
        const onToggleListItem = this.props.onToggleListItem
        const listItem = list.map((currentList,index) => 
                            <ListItem onDeleteTask={onDeleteTask} onEditTask={onEditTask} onToggleListItem={onToggleListItem} data={currentList} key={index} val={currentList.title}></ListItem>
                        );
        return (
            <div>
                <ul>
                    {listItem}
                </ul>
            </div> 
        );
    }
}
 
export default List;