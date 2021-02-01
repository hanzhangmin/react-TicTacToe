import React, { Component } from "react";
export default class ChessPiece extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="chess-piece">{this.props.number}</div>;
  }
}
