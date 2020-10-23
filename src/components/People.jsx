import React, { Component } from 'react';
import PeopleCard from './PeopleCard'



class People extends Component {
    constructor(props) {
        super(props);

        this.state = {

            people: [],


        }
    };

    componentDidMount = () => {
        fetch("https://ghibliapi.herokuapp.com/people")
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
                <center>
                    <h1>People</h1>
                    <div>
                        {this.state.people.map(people => <PeopleCard people={people} key={people.id} />)}
                    </div>
                </center> </>
        )


    }



}
export default People;