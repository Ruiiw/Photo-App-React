import React from "react";
import { getHeaders } from "./utils";

class Comments extends React.Component {
    render () {
        const post = this.props.post
        if (post.comments.length > 1) {
            return (
                <div>
                    <button>View all {post.comments.length} Comments</button>
                    <p>
                        <b>{post.comments[post.comments.length - 1].user.username}</b> {post.comments[post.comments.length - 1].text}
                    </p>
                </div>
            );
        }
        else if (post.comments.length == 1) {
            return (
                <div>
                    <p>
                            <b>{post.comments[0].user.username}</b> {post.comments[0].text}
                        </p>
                </div>
            )
        }
        else {
            return (
                <div> </div>
            )
        }
    }
}

export default Comments;