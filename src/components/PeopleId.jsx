import React, { Component } from 'react';
import { Link } from "react-router-dom";
import People from './People';



class PeopleId extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: {},
            films: {}
        }
    };

    componentDidMount = () => {
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(res => {
                this.setState({ people: res })
                console.log(res)
            })
            .catch(err => console.log(err))
    }




    render() {
        return (
            <>
                <div class="d-flex justify-content-center">
                    <h1>People</h1></div>
                <div class="d-flex justify-content-center">
                    <div class="card border-info center mt-5 mb-3 w-50">
                        <div class="card-body text-center">


                            <h6 class="card-subtitle mb-2 text-muted">{this.state.people.name}</h6>
                            <p class="card-text">Hair Color: {this.state.people.hair_color}</p>
                            <p class="card-text">Eye Color: {this.state.people.eye_color}</p>
                            <Link to={`/People/${this.state.people.id}`}>
                                <Link to="/People">
                                    <button class="btn btn-info" onClick={new People}>Back to People</button></Link>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    };
}

export default PeopleId;
