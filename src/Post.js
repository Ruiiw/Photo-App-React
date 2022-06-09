import React from "react";
import LikeButton from "./LikeButton";
import BookmarkButton from "./BookmarkButton";
import AddComment from "./AddComment";
import Comments from "./Comments";
import { getHeaders } from "./utils";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: props.model,
    }
    this.refreshPostDataFromServer = this.refreshPostDataFromServer.bind(this)
  }

  // displayComments () {
  //   if (post.comments.length > 1) {
  //     return `<button data-post-id=${post.id} id="viewAll_${post.id}" onclick="showModal(event)" class="blue-text">View all ${
  //       post.comments.length
  //     } Comments</button>
  //             <p>
  //               <b>${post.comments[post.comments.length - 1].user.username}</b> ${
  //       post.comments[post.comments.length - 1].text
  //     }
  //             </p>`;
  //   } else if (post.comments.length === 1) {
  //     return `<p>
  //               <b>${post.comments[0].user.username}</b>${post.comments[0].text}
  //             </p>`;
  //   } else {
  //     return "";
  //   }
  // };

  refreshPostDataFromServer() {
    const url = "/api/posts/" + this.state.post.id;
    fetch(url, {
      headers: getHeaders(),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
            post: data
        });
      });
  }

  render() {
    const post = this.state.post;
    return (
      <section className="card">
        <h2>{post.user.username}</h2>
        <img src={post.image_url} />
        <LikeButton 
            likeId={post.current_user_like_id} 
            postId={post.id}
            refreshPost={this.refreshPostDataFromServer} 
            className="buttons"/>
        <BookmarkButton 
            bookmarkId={post.current_user_bookmark_id} 
            postId={post.id}
            refreshPost={this.refreshPostDataFromServer}
            className="buttons" />
        <b>{post.likes.length} likes</b>
        <p className="caption"><b>{post.user.username} </b>{post.caption}</p>
        <Comments post = {post} />
        <p className="timestamp">{post.display_time}</p>
        <AddComment 
            postId={post.id}
            refreshPost={this.refreshPostDataFromServer}/>
      </section>
    );
  }
}

export default Post;
