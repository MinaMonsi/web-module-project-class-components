// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from './Todo';

const TodoList = props => {
    return(
        <div className="todo-list">
            {props.todos.map(todo => (
            <Todo todo={todo} key={todo.id} toggleTodo={props.toggleTodo}/>
            ))}
            

            {/* props.todos.map(todo => {
          // console.log("TODOLIST TODO: ", todo);
        return <Todo toggleCompleted={props.toggleCompleted} key={todo.id} todo={todo} /> */}


        </div>
    )
}

export default TodoList;