import React, { Component } from 'react'
import { withRouter, Router, Link } from 'react-router-dom'

import './SideBar.css'

class Sidebar extends Component {
    render() {
        return (
            <div className="sidenav">
                <div className="sidenav-child1">
                    <i class="fab fa-trello"></i>
                    {/* <Router>
                        <Link to="/boardpage">header</Link>
                    </Router> */}
                    <span className="span-boards">Boards</span>
                </div>
            </div>
        )
    }
}

export default withRouter(Sidebar)
