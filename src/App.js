import React, {Component} from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
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

  //Add todo
  addTodo = (title) => {
    console.log(title);
    const newTodo={
      id:4,
      title:title,
      completed:false

    }
    this.setState({todos:[...this.state.todos,newTodo]})
  }

  render(){
    console.log(this.state.todos);
    return (
      <div className="App">  
        <div className="container">
        <Header/>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} 
        markComplete={this.markComplete} 
        delTodo={this.delTodo}/>
        </div>    

      </div>
    );  
  }
}

export default App;
