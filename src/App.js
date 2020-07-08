import React, {Component} from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import './App.css';

class App extends Component {

  state = {
    todos:[
    
      {
        id: 1,
        title:'Take out garbage',
        completed: false
      },
      {
        id: 2,
        title:'Dinner',
        completed: true
      },
      {
        id: 3,
        title:'Meeting',
        completed: false
      }


    ]
  }

  //Toggle complete
  markComplete = (id) => {
    console.log('App hello ' + id);
    this.setState({todos: this.state.todos.map(todo =>{
      if(todo.id===id){
        todo.completed=!todo.completed;
      }
      return todo;
    })});
  }

  //Delete todo
  delTodo = (id) => {
    console.log(id);
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  render(){
    console.log(this.state.todos);
    return (
      <div className="App">      
        <Header/>
        <Todos todos={this.state.todos} 
        markComplete={this.markComplete} 
        delTodo={this.delTodo}
        />
      </div>
    );  
  }
}

export default App;
