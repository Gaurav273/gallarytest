import React, { Component } from 'react';



class AdminHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
                     <div className="App-bar">
                        <div className="container">
                            <nav className="navbar navbar-expand-lg">
                            
                                <a className="nav-item  username-box">
                                    Gallary
                                </a>
                            </nav>
                        </div>
                    </div> 
        );
    }
}

export default AdminHeader;