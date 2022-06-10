import React from 'react';
import { getHeaders } from "./utils";

class Stories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: []
        }
        this.getStoriesFromServer();
    }

    getStoriesFromServer () {
        fetch('https://rui-photo-app-3.herokuapp.com/api/stories', {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                stories: data
            })
        })
    }

    render(){
        return (
            <header className="stories">
              {this.state.stories.map((story) => {
                console.log(story);
                return (
                    <div key={"story_" + story.id}>
                        <img src={story.user.thumb_url} className="pic"/>
                        <p>{story.user.username}</p>
                    </div>
                )
              })}
            </header>
          );

    }
}

export default Stories;