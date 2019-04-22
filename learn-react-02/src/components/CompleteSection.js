import React, { Component } from 'react';
import '../css/completesection.css'
import List from '../components/List'
class CompleteSection extends Component {
    state = { 
        
    }
    
    render() { 
        
        const list = this.props.data
        const onDeleteTask = this.props.onDeleteTask
        let isShow = ""
        let isShowText = ""
        
        if(this.props.showComplete){
            isShow = "content show"
            isShowText = "Hide"
        }else{
            isShow = "content notshow"
            isShowText = "Show"
        }

        const onToggleListItem= this.props.onToggleListItem
        return (
            <div>
                <div className="label-top">
                    <div>
                        {`${list.length} complete` }
                    </div>
                    <div>
                        <button onClick = {this.props.handleShow}>{isShowText}</button>
                    </div>
                </div>
                <div className={isShow}>
                    <List onDeleteTask={onDeleteTask} data={list} onToggleListItem={onToggleListItem}/>
                </div>
            </div>
        );
    }
}

 
export default CompleteSection;