import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Posts extends Component {

  render() {
    let posts;
    if(this.props.posts) {
      posts = this.props.posts.map(post => {
        console.log(post)
      })
    }
    return (
      <h1>This is a post </h1>
    ); 
  }
}


export default Posts;
