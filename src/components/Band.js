import React, { Component } from 'react';

class Band extends Component {

  render() {

    return(
      <li>
        <p>{this.props.band.name}</p>
        <button onClick = {() => this.props.delete(this.props.band.id)}>Delete</button>
      </li>
    );
  }
};

export default Band;
