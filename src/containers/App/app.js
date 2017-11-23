import React, {Component} from 'react';
import {HashRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom';
import './app.less';
import Home from "../Home/index";
import Lesson from "../Lesson/lesson";
import Profile from "../Profile/profile";
import Tab from "../../components/Tab/tab";
import Recipe from "../../components/Search/Recipe/recipe";
import Search from "../../components/Search/search"
import Register from "../Profile/Register/register";
import Login from "../Profile/Login/login";
import Person from "../Profile/Person/person";

import Dialog from '../../components/Dialog/dialog.js'
import Gift from "../../components/Header/gift/gift";


export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/Recipe/:from" component={Recipe}/>
                        <Route path="/lesson" component={Lesson}/>

                        <Route path="/share" component={Dialog}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route path="/gift" component={Gift}/>
                        <Route path="/search/:from" component={Search}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/person" component={Person}/>
                        <Redirect to="/home"/>
                    </Switch>
                    <Tab/>
                </div>
            </Router>
        )
    }
}
