const React = require("react");
const ReactDom = require("react-dom");
import "./tictactoe.css";
import Game from "./components/tictactoe/Game";

ReactDom.render(<Game></Game>, document.getElementById("app"));
