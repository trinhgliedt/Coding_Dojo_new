import React from "react";

class ToDoList extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div class="text-left">
                <h3>Things I need to do:</h3>
                <ul>
                    <li>Learn React</li>
                    <li>Climb Mt. Everest</li>
                    <li>Run a marathon</li>
                    <li>Feed the dogs</li>
                </ul>
            </div>
        )
    }

}
export default ToDoList;