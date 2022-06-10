import React from "react";
import {getHeaders} from './utils';

class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.commentText = React.createRef();
        // binding "this"
        // helps disambiguate between what "this" is referring to
        this.addComment = this.addComment.bind(this);
    }


    addComment () {
        const postData = {
          post_id: this.props.postId,
          text: this.commentText.current.value
        };
        console.log(postData)
        fetch("https://rui-photo-app-3.herokuapp.com/api/comments", {
            headers: getHeaders(),
            method: "POST",
            body: JSON.stringify(postData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.props.refreshPost();
            this.commentText.current.value=''
          });
    };

    

    render() {
        return (
            <div>
                <i className="far fa-smile emoji-img fa-2x"></i>
                <input type="text" placeholder="Add a Comment" ref={this.commentText}/>
                <button onClick={this.addComment}>Post</button>
            </div>
        )
        
    }
}

export default AddComment;