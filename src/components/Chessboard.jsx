import React from "react";
import ChessPiece from "./ChessPiece";
export default class Chessboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="chessboard">
        <ChessPiece number={4} />
      </div>
    );
  }
}
