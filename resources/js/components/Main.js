import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav'
import Form from './user/Form';
import Edit from './user/Edit';
import List from './user/List';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

function Main() {
    return(
        <Router>
            <main>
                <Nav />
                <Switch>
                    <Route path="/user/index" exact component={List} />
                    <Route path="/user/form" component={Form} />
                    <Route path="/user/edit/:id" component={Edit} />
                </Switch>
            </main>
        </Router>
    )
}

export default Main
ReactDOM.render(<Main />, document.getElementById('main-user'));