import React from 'react';
import { getHeaders } from "./utils";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: []
        }
        this.getProfileFromServer();
    }

    getProfileFromServer () {
        fetch('/api/profile', {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                profile: data
            })
        })
    }


    render(){
        return (
            <header className="profile">
                <img
                    src={this.state.profile.image_url}
                    className="profile-pic"
                />
                <h2 className="profile-name">{this.state.profile.username}</h2>
            </header>
        )

    }
}

export default Profile;