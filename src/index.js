import _ from "lodash";
import "./style.css";
import Icon from "./tdd.png";

function component() {
  const div = document.createElement("div");

  div.innerHTML = _.join(["Hello", "World"], " ");
  div.classList.add("hello");

  const tddIcon = new Image();
  tddIcon.src = Icon;
  div.appendChild(tddIcon);

  return div;
}

document.body.appendChild(component());
