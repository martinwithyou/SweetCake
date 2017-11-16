import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import './tab.less';
export default class Tab extends Component{
    render(){
        return (
            <div>
                <nav className="tabs">
                    <NavLink exact to="/">
                        <i className="icon-index"/>
                        <span>首页</span>
                    </NavLink>
                    <NavLink to="/courses">
                        <i className="icon-lesson"/>
                        <span>课程</span>
                    </NavLink>
                    <NavLink to="/profile">
                        <i className="icon-profile"/>
                        <span>我的</span>
                    </NavLink>
                </nav>
            </div>
        )
    }
}