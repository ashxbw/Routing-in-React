import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Films from './Films';
import FilmsId from "./FilmsId";
import People from './People';
import PeopleId from './PeopleId'


class App extends Component {

    render() {

        return (

            <Router>
                <Fragment>

                    <div class="d-flex justify-content-center" id="container">
                        <div class="mt-5 mb-5 mr-3">
                            <Link to="/"><button class="align-items-center btn btn-outline-info shadow-sm">Go Home</button></Link>
                        </div>

                        <div class="mt-5 mb-5 mr-3">
                            <Link to="/Films"><button class="btn btn-outline-info shadow-sm">View Films</button></Link>
                        </div>

                        <div class="mt-5 mb-5"><Link to="/People"><button class="btn btn-outline-info shadow-sm">View People</button></Link></div>
                    </div>



                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/Films' component={Films} />
                        <Route exact path='/Films/:id' component={FilmsId} />
                        <Route exact path='/People' component={People} />
                        <Route exact path='/People/:id' component={PeopleId} />
                    </Switch>



                </Fragment>




            </Router>


        )


    }



}

export default App;
