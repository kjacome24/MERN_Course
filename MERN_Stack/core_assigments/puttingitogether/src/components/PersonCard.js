import React, { Component } from "react";
import './styles.css'; 


class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    increaseCount = () => {
        this.setState({age: this.state.age + 1});
    }


    render() {
        const {firstName, lastName, hairColor} = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button className="btn" onClick={this.increaseCount}>Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }
}

export default PersonCard;