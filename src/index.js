import _ from "lodash"
import "./style.css"
import Img from "./desk_005.jpg"
import data from "./data.xml"

function component() {
    var element = document.createElement("div");
    // Lodash(目前通过一个Script脚本引入)对于执行这一行是必须的
    element.innerHTML = _.join(['hello', 'webpack', '!'], ' ');
    var img = new Image();
    img.src = Img;
    element.appendChild(img);
    var icon = document.createElement("span");
    icon.className = 'icon-xihuan';
    element.appendChild(icon);
    // element.className = "div";
    console.log(data);
    return element
}
document.body.appendChild(component())