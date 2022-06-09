import React from "react";
import {getHeaders} from './utils';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);

        // binding "this"
        // helps disambiguate between what "this" is referring to
        this.toggleLike = this.toggleLike.bind(this);
        this.createLike = this.createLike.bind(this);
        this.removeLike = this.removeLike.bind(this);
    }

    toggleLike () {
        if(this.props.likeId) {
            this.removeLike();
        } else {
            this.createLike();
        }
    }


    createLike () {
        const url = '/api/posts/likes';
        const postData = {
            post_id: this.props.postId
        }
        console.log('create like:', url);
        fetch(url, {
            headers: getHeaders(),
            method: 'POST',
            body: JSON.stringify(postData)
        }).then(response => response.json())
        .then(data => {
            console.log(data);    

            // this is calling the parent's method
            this.props.refreshPost();
        })
    }

    removeLike () {
        const url = '/api/posts/likes/' + this.props.likeId;
        console.log('remove like:', url);
        fetch(url, {
            headers: getHeaders(),
            method: 'DELETE'
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            this.props.refreshPost();    
        })
    }

    render() {
        const likeId = this.props.likeId;
        const heartClass = (likeId ? 'fas' : 'far') + " fa-heart";
        return (
            <button 
                onClick={this.toggleLike}
                aria-label="Like / Unlike">
                <i className={heartClass}></i>
            </button>
        )
        
    }
}

export default LikeButton;
