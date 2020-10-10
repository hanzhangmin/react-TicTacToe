# key的作用

 react中的key 与vue 一样

vue文档中如下说
>
key 的特殊属性主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法。而使用 key 时，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。
有相同父元素的子元素必须有独特的 key。重复的 key 会造成渲染错误。
它也可以用于强制替换元素/组件而不是重复使用它。当你遇到如下场景时它可能会很有用:
1.完整地触发组件的生命周期钩子
2.触发过渡
一般v-for循环最好都要交加上key。

# react创建组件

* function 方式
    ~~~jsx
    <!-- 使用 -->
    <Hello name = "react"></Hello >
    <!-- es6语法传值 -->
    <Hello {...obj}></Hello >
    <!-- 定义 -->
    function Hello(props){
        return <h1>这是一个react组件</h1>
    }
    <!-- props可以接受组件传过来的值 ，并且是只读的-->
    ~~~

* 使用 class 关键字创建组件
    * 简单组件
    ~~~JavaScript
    const React = require("react");
    export class Child extends React.Component {
        render () {
            console.log(props);
            return <div>这是一个Child组件</div>
        }
    }
    ~~~
    * 有状态组件
    ~~~JavaScript
    class Timer extends React.Component {
        constructor(props) {
            super(props);
            this.state = { seconds: 0 };
        }

        tick() {
            this.setState(state => ({
            seconds: state.seconds + 1
            }));
        }

        componentDidMount() {
            this.interval = setInterval(() => this.tick(), 1000);
        }

        componentWillUnmount() {
            clearInterval(this.interval);
        }

        render() {
            return (
            <div>
                Seconds: {this.state.seconds}
            </div>
            );
        }
    }
    
    ReactDOM.render(
        <Timer />,
        document.getElementById('timer-example')
    );
    ~~~


