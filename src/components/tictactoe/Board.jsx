import React from "react";
import Square from "./Square";
// 棋盘面板
export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: {},
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
    if (squares[i] != null) {
      alert("不能落子！");
      return;
    }
    let res;
    //   小于1黑子落棋，等于1 白子落棋
    if (this.state.clicked < 1) {
      squares[i] = 1;
      this.state.block[i] = i;
      this.state.clicked = 1;
      res = this.judge(Object.values(this.state.block));
    } else if (this.state.clicked == 1) {
      squares[i] = 0;
      this.state.white[i] = i;
      this.state.clicked = 0;
      res = this.judge(Object.values(this.state.white));
    }
    let span = this.state.span++;
    this.state.history[span] = squares;
    console.log(this.state.history);
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
  //二次验证
  verify(i, j, q) {
    if (i + q === 2 * j) {
      switch (j - i) {
        case 1:
          if (i % 3 === 0) return true;
          break;
        case 2:
          if (i === 2) return true;
          break;
        case 3:
          if (i <= 2) return true;
          break;
        case 4:
          return true;
        default:
          break;
      }
    }
    return false;
  }

  // 游戏结束
  gameOver() {
    this.setState({
      squares: Array(9).fill(undefined),
      white: {},
      block: {},
      clicked: -1,
      span: 0,
    });
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
