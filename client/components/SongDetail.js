import React, { Component } from "react";
import fetchSong from "../queries/fetchSong";
import { graphql } from "react-apollo";

class SongDetail extends Component {
  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>{this.props.data.song.title}</h1>
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);
