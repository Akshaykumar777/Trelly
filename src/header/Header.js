import React, { Component } from 'react'
import './Header.css'
import { withRouter } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className="header-parent">
                <div className="trello">
                    <i class="fab fa-trello"></i>
                      {/* <img src={process.env.PUBLIC_URL + '/trel.png'} />  */}
                    <span>Trello</span>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)
