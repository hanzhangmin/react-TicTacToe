// 有状态组件
const React = require("react");
// react 封装的一个计时器组件
export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1,
    }));
  }

  //设置定时器
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  // 清空定时器
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // render函数 ，返回dom
  render() {
    return <div>Seconds: {this.state.seconds}</div>;
  }
}
