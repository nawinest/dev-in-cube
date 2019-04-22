import React, { Component } from 'react';
import '../css/header.css'
class Header extends Component {
    state = {  }
    render() { 
        const onCreateNewItem = this.props.onCreateNewItem
        const newObj = {
            title: "Your task",
            isComplete : false
        }
        return ( 
            
            <div className="Header">
                <div>
                    <h1>New List</h1>
                </div>
                <div>
                    <button onClick={()=> onCreateNewItem(newObj)}>Add</button>
                </div>
            </div>
         );
    }
}
 
export default Header;