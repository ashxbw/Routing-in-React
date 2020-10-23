import React, { Component } from 'react';
import Cards from './Cards'




class Films extends Component {
    constructor(props) {
        super(props);

        this.state = {

            films: [],
            id: []

        }
    };

    componentDidMount = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(res => {
                this.setState({ films: res })
                console.log(res)
            })
            .catch(err => console.log(err))


    }





    render() {

        return (
            <> <center>
                <h1>Films</h1>

                <div>{this.state.films.map(film => <Cards film={film} key={film.id} />)}

                </div>


            </center> </>
        );
    };


}

export default Films;
