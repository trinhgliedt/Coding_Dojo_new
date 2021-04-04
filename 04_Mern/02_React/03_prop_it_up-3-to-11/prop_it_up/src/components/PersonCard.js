import React from "react";

class PersonCard extends React.Component {
    constructor(props){
        super(props);
        
    }
render(){
    return (
        <div class="text-left">
            <h3>{ this.props.lastName }, { this.props.firstName }</h3>
                <p>Age: { this.props.age }</p>
                <p>Hair Color: { this.props.hairColor }</p>
        </div>
    )
}

}
export default PersonCard;