const React = require("react");
export class Child extends React.Component {
    render () {
        console.log(props);
        return <div>这是一个Child组件</div>
    }
}