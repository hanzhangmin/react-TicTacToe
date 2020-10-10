const React = require("react");
const ReactDom = require("react-dom");
const {
    Timer
} = require("./components/Timer")
// // const Hello = require('./Hello.jsx');
// import {
//     Hello
// } from "@/components/Hello"

// import {
//     Child
// } from "@/components/Child"
// // console.log();

// // react 最基本的语法，但是，平常开发过程中不会这样写，这样创建dom很繁琐  没有html语法简单
// // let h1 = React.createElement('h1', null, "这是一个react例子！");
// // let div1 = React.createElement("div", null, "这是一个div父元素呀", h1);
// // jsx语法是将其编译成 上面的语句规范，然后进行渲染的


// /**
//  * 在jsx表达式中，将js语句放进  {}中
//  */
// let message = " 你好呀， react! ";

// // function Hello(props) {
// //     console.log(props);

// //     return <div > 这是一个react组件 < /div>
// // }

// let arr = [ <
//     h1 > 这是h1标签 < /h1>, <
//     h2 > 这是h2标签 < /h2>, <
//     h3 > 这是h3标签 < /h3>,
// ];


// let obj = {
//     name: "hzm",
//     age: 18
// }

// let arrstr = [{
//         id: 0,
//         name: "牡丹花"
//     },
//     {
//         id: 0,
//         name: "桃花"
//     },
//     {
//         id: 0,
//         name: "桔梗花"
//     },
//     {
//         id: 0,
//         name: "水仙花"
//     },
// ]




// const div1 = < div >
//     <
//     h1 > {
//         message
//     } < /h1> 

//     <
//     hr / >

//     {
//         arr
//     }

//     <
//     hr / >

//     {
//         obj.name
//     }

//     <
//     hr / >

//     <
//     ul > {
//         arrstr.map(item => <
//             li key = {
//                 item.id
//             } > {
//                 item.name
//             } < /li>
//         )
//     } <
//     /ul> 

//     <
//     hr / >

//     <
//     Hello {
//         ...obj
//     } >
//     <
//     /Hello >

//     <
//     Child {
//         ...obj
//     } >
//     <
//     /Child>

//     <
//     /
// div >


ReactDom.render( < Timer > < /Timer>, document.getElementById("app"));