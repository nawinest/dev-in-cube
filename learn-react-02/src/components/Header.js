import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        const onCreateNewItem = this.props.onCreateNewItem
        const newObj = {
            title: "Your task",
            isComplete : false
        }
        return ( 
            
            <div className="header">
                <div>
                    <h1>New List</h1>
                </div>
                <div>
                    <button className="addBtn" onClick={()=> onCreateNewItem(newObj)}>+</button>
                </div>
                
            </div>
         );
    }
}
 
export default Header;