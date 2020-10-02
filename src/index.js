import _ from "lodash"
import printMe from "./print"
import "./style.css"
import {
    del
} from "./main"

function component() {
    var element = document.createElement("div");
    var btn = document.createElement('button');
    // Lodash(目前通过一个Script脚本引入)对于执行这一行是必须的
    element.innerHTML = _.join(['hello', 'webpack', '!'], ' ');
    btn.innerHTML = `Click me and check the console! del(10,5)=${ del(10,5)}`;
    btn.onclick = printMe;
    element.appendChild(btn);
    return element
}
let element = component()
document.body.appendChild(element)
if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
        /*
            这样虽然实现了更新， 但是当你点击button时， 输出的仍旧是旧的函数
            修改方式：加上下面三行代码
                */
        document.body.removeChild(element);
        element = component(); // 重新渲染页面后，component 更新 click 事件处理
        document.body.appendChild(element);
    })
}