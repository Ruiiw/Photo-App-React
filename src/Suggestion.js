import React from "react";
import { getHeaders } from "./utils";

class Suggestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestion: this.props.model,
            followingId: null
        }
        this.toggleFollow = this.toggleFollow.bind(this)
        this.startFollowing = this.startFollowing.bind(this)
        this.startFollowing = this.startFollowing.bind(this)
    }


    toggleFollow () {
        if(this.state.followingId) {
            this.stopFollowing();
        } else {
            this.startFollowing();
        }
    }


    startFollowing () {
        const url = '/api/following/';
        const followingData = {
            user_id: this.state.suggestion.id
        }
        console.log('start following:', url);
        fetch(url, {
            headers: getHeaders(),
            method: 'POST',
            body: JSON.stringify(followingData)
        }).then(response => response.json())
        .then(data => {
            console.log(data);    

            // this is calling the parent's method
            this.setState({followingId: data.id})
        })
    }


    stopFollowing () {
        const url = '/api/following/' + this.state.followingId;
        console.log('stop following:', url);
        fetch(url, {
            headers: getHeaders(),
            method: 'DELETE'
        }).then(response => response.json())
        .then(data => {
            console.log(data);    
            // this is calling the parent's method
            this.setState({followingId: null})
        })
    }



    render() {
        const suggestion = this.state.suggestion;
        return (
            <section className="suggestion">
                <img src={suggestion.image_url}/>
                <div className="suggestion-text">
                    <p>{suggestion.username}</p>
                    <p>suggested for you</p>
                </div>
                <button aria-label="follow / unfollow" onClick={this.toggleFollow}>{this.state.followingId ? "unfollow" : "follow"}</button>
            </section>
        );
    }
}

export default Suggestion;
