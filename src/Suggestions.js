import React from 'react';
import { getHeaders } from "./utils";
import Suggestion from "./Suggestion";

class Suggestions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestions: [],
        };
        this.getSuggestionsFromServer();
    }

    getSuggestionsFromServer() {
        fetch("https://rui-photo-app-3.herokuapp.com/api/suggestions", {
          headers: getHeaders(),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.setState({
              suggestions: data,
            });
          });
    }

    render(){
        return (
            <div className="suggestions">
                <p className="suggestion-text">Suggestions for you</p>
                <div>
                    {this.state.suggestions.map((suggestion) => {
                        console.log("hi");
                        return <Suggestion key={"suggestion_" + suggestion.id} model={suggestion} />;
                    })}
                </div>
            </div>
        )

    }
}

export default Suggestions