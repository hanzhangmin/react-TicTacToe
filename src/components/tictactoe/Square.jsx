import React from "react";
//棋盘的小方格
export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="chess-piece" onClick={() => this.props.onClick()}>
        {this.props.value != null ? (
          <span
            className={`chess ${
              this.props.value == 1 ? "block" : "white"
            }`}></span>
        ) : null}
      </button>
    );
  }
}
