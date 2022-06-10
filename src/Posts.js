import React from "react";
import { getHeaders } from "./utils";
import Post from "./Post";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.getPostsFromServer();
  }

  getPostsFromServer() {
    fetch("https://rui-photo-app-3.herokuapp.com/api/posts", {
      headers: getHeaders(),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          posts: data,
        });
      });
  }

  componentDidMount() {}
  
  render() {
    return (
      <div id="posts">
        {this.state.posts.map((post) => {
          console.log(post);
          return <Post key={"post_" + post.id} model={post} />;
        })}
      </div>
    );
  }
}

export default Posts;
