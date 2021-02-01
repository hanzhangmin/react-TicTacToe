import React from "react";
import Square from "./Square";
// 棋盘面板
export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9),
      white: {},
      block: {},
      clicked: -1,
      span: 0,
    };
  }

  //鼠标点击函数
  handleClick(i) {
    let squares = this.state.squares.slice();
    // console.log(squares[i] != undefined);
    if (squares[i] != null) {
      alert("不能落子！");
      return;
    }
    let res;
    //   小于1黑子落棋，等于1 白子落棋
    if (this.state.clicked < 1) {
      squares[i] = 1;
      let block = { ...this.state.block };
      block[i] = i;
      this.setState({
        clicked: 1,
        block: block,
      });
      res = this.judge(Object.values(block));
    } else if (this.state.clicked == 1) {
      squares[i] = 0;
      let white = { ...this.state.white };
      white[i] = i;
      this.setState({
        clicked: 0,
        white: white,
      });
      res = this.judge(Object.values(white));
    }
    let span = this.state.span++;
    this.setState({
      span: ++span,
      squares: squares,
    });
    if (res) {
      setTimeout(() => {
        this.state.clicked === 1
          ? alert("黑子胜利，游戏结束！")
          : alert("白子胜利，游戏结束！");
        this.gameOver();
        //   location.reload();
      }, 0);
    } else {
      if (this.state.span === 9) {
        setTimeout(() => {
          alert("平局，游戏结束！");
          this.gameOver();
        }, 0);
      }
    }
  }

  //判定输赢
  judge(arr) {
    if (arr.length >= 3) {
      arr.sort((a, b) => a - b);
      for (let j = 1; j < arr.length - 1; j++) {
        let i = j - 1,
          q = j + 1;
        if (this.verify(arr[i], arr[j], arr[q])) {
          return true;
        }
        i--;
        while (i >= 0) {
          if (this.verify(arr[i], arr[j], arr[q])) {
            return true;
          }
          i--;
        }
        q++;
        while (q < arr.length) {
          if (this.verify(arr[i], arr[j], arr[q])) {
            return true;
          }
          q++;
        }
      }
    }
    return false;
  }

  // 游戏结束的
  gameOver() {
    this.setState({
      squares: Array(9).fill(undefined),
      white: {},
      block: {},
      clicked: -1,
      span: 0,
    });
  }

  verify(i, j, q) {
    if (i + q === 2 * j) {
      if (j - i == 1 && i % 3 == 0) {
        return true;
      }
      if (j - i == 2 && i == 2) {
        return true;
      }
      if (j - i == 3 && i <= 2) {
        return true;
      }
      if (j - i == 4) {
        return true;
      }
    }
    return false;
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}></Square>
    );
  }
  render() {
    return (
      <div className="chessboard-body ">
        <div className="status">
          {this.state.clicked <= 1 ? (
            <span
              className={`chess ${
                this.state.clicked < 1 ? "block" : "white"
              }`}></span>
          ) : (
            "游戏结束！"
          )}
        </div>
        <div className="chessboard">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
