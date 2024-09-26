import React from "react";

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            todo: ''
        };
    }

    handleChanges = (e) => {
        //update state with each keystroke
        this.setState({
            ...this.state,
            todo: e.target.value
        });
    };

    submitTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.todo)
        this.setState({ todo: '' });
    };

    render(){
        return(
            <div className="formDiv">
                <form onSubmit={this.submitTodo}> 

                <input type="text" name="todo" value={this.state.todo}
                onChange={this.handleChanges}/>

                <button onClick={this.submitTodo}>Add Todo</button>

                <button onClick={this.props.clearCompleted}>Clear</button>
            </form>
            </div>
            
        )
    }
}

export default TodoForm;