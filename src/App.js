import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const todos =  [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos: todos
    }
  }
  
  addTodo = (todo) => {
     console.log('adding todo');
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }
  
  toggleTodo = (todoId) => {
    console.log('toggling todo', todoId);
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed 
          };
        } else {
          return todo
        }
      })
    })
  }

  clearCompleted = (e) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => !todo.completed)
    })
  }

  

  render() {
    return (
      <div className="app">
        <header className="app-header">
        </header>
        <div className="app-form">
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted}/>
        </div>
      </div>
    );
  }
}

export default App;
