import React from "react";
import Board from "./Board";
export default class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="title">
          <h1>井字棋</h1>
        </div>
        <Board />
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
