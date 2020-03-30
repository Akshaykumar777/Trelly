import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Sidebar from '../../sidebar/Sidebar'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from "../../header/Header.js"
import "./BoardComponent.css"
import Boards from '../../boards/Boards';

class BoardComponent extends Component {
    render() {
        return (
            <div className="boardcomponent">
                <div className="header">
                    <Header></Header>
                </div>
                <div className="body">
                    <div className="sidebar">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="body-component">
                        <Boards></Boards>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(BoardComponent)


