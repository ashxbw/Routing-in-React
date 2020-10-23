import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Films from './Films'


class FilmsId extends Component {
    constructor(props) {
        super(props);

        this.state = {
            film: {}
        }
    };

    componentDidMount = () => {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(res => {
                this.setState({ film: res })
                console.log(res)
            })
            .catch(err => console.log(err))
    }



    render() {
        return (
            <>
                <div class="d-flex justify-content-center">
                    <h1>Films</h1></div>
                <div class="d-flex justify-content-center">
                    <div class="card border-info center mt-5 mb-3 w-50">
                        <div class="card-body text-center">

                            <h6 class="card-subtitle mb-2 text-muted">{this.state.film.title}</h6>
                            <p class="card-text">Director - {this.state.film.director}</p>
                            <p class="card-text">Producer - {this.state.film.producer}</p>
                            <Link to={`/Films/${this.state.film.id}`}>
                                <Link to="/Films">
                                    <button class="btn btn-info" onClick={new Films}>Back to Films</button>
                                </Link>
                            </Link>



                        </div>
                    </div>
                </div>
            </>
        );
    };
}

export default FilmsId;
