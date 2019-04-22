import React, { Component } from 'react';
import Header from './components/Header';
import './css/app.css'
import CompleteSection from './components/CompleteSection';
import List from './components/List'

class App extends Component {
  
  state = {
    list : [{
      title: 'Task 1',
      isComplete : true
    },{
      title: 'Task 2',
      isComplete : false
    },{
      title: 'Task 3',
      isComplete : false
    },
    {
      title: 'Task 4',
      isComplete : true
    }],
    showComplete : false,
  }

  handleShow = () =>{
      this.setState({
        showComplete: this.state.showComplete? false : true
      })
  }

  onCreateNewItem = (newObj) =>{
      const lists = this.state.list
      const list2 = [...lists, newObj]
      this.setState({
        list:list2
      })
  }

  onToggleListItem = (e) => {
      let target = e.target
      let value = target.checked
      let val = target.getAttribute('val')
      const lists = this.state.list
      const index = lists.findIndex(list => list.title === val);
      lists[index].isComplete = value
      this.setState({list: lists})
  }

  onEditTask = (e) => {
    let target = e.target
    let value = target.value
    
    let val = target.getAttribute('val')
    const lists = this.state.list
    const index = lists.findIndex(list => list.title === val);
    lists[index].title = value
    
    this.setState({
      list:lists
    })
  };

  onDeleteTask = (val) => {
    const lists = this.state.list;
    const index = lists.findIndex(list => list.title === val);
    lists.splice(index,1)
    this.setState({
      list:lists
    })
  };

  

  render() {
    const list = this.state.list
    const unfinishList = list.filter((el)=>{
      return el.isComplete===false;
    })
    const finishedList = list.filter((el)=>{
      return el.isComplete===true;
    })
    return (
      <div className="container">
        <Header onCreateNewItem={this.onCreateNewItem} />
        <CompleteSection onDeleteTask={this.onDeleteTask} onToggleListItem={this.onToggleListItem} data={finishedList} handleShow={this.handleShow} showComplete={!this.state.showComplete}/>
        <List onDeleteTask={this.onDeleteTask} data={unfinishList} onEditTask={this.onEditTask} onToggleListItem={this.onToggleListItem}/>
      </div>
    );
  }
}



export default App;
