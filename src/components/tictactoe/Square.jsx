import React from "react";
//棋盘的小方格
export default function Square(props) {
  return (
    <button className="chess-piece" onClick={() => props.onClick()}>
      {props.value != null ? (
        <span
          className={`chess ${props.value == 1 ? "block" : "white"}`}></span>
      ) : null}
    </button>
  );
}
