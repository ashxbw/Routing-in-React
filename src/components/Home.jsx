import React, { Component } from 'react';
import Logo from '../assets/logo.png'


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        }
    };


    render() {
        return (
            <>
                <div class="d-flex justify-content-center">
                    <h1 class="text mb-3">Welcome</h1></div>
                <div class="d-flex justify-content-center"><img src={Logo} alt="Studio Ghibli Logo" /></div>    </>)
    }
}

export default Home;





