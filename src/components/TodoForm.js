import React from "react";

class TodoList extends React.Component {
    constructor(){
        super();
        this.state = {
            newTask: ''
        }
    }

    render(){
        return(
            <form>
                <input type="text" name="newTask" value={this.state.newTask}/>
                <button>Submit</button>
                <button>Clear</button>
            </form>
        )
    }
}

export default TodoList;