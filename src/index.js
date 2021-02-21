import _ from "lodash";
import "./style.css";
import Icon from "./tdd.png";
import print from "./print.js";

function component() {
  const div = document.createElement("div");

  div.innerHTML = _.join(["Hello", "World"], " ");
  div.classList.add("hello");

  const tddIcon = new Image();
  tddIcon.src = Icon;
  div.appendChild(tddIcon);

  const btn = document.createElement("button");
  btn.innerHTML = "Click";
  btn.onclick = print;
  div.appendChild(btn);

  return div;
}

document.body.appendChild(component());
