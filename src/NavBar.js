import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        console.log('NavBar props:', props)
    }

    componenetDidMount() {

    }
    render(){
        return (
            <nav className="main-nav">
                <h1>{this.props.title}</h1>
                { this.props.username }
                {/* Navigation Links */}
            </nav>
        )

    }
}

export default NavBar;