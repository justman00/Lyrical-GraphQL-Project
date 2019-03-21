import React, { Component } from "react";
import fetchSong from "../queries/fetchSong";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

class SongDetail extends Component {
  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }
    console.log(this.props.data);
    return (
      <div className="container">
        <Link to="/">Back</Link>
        <h3>{this.props.data.song.title}</h3>
        <LyricList lyrics={this.props.data.song.lyrics} />
        <LyricCreate songId={this.props.data.song.id} />
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);
