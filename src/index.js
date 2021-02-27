import _ from "lodash";
import print from "./print";

function getComponent() {
  const element = document.createElement("div");

  const text = _.join(["Hello", "World"], " ");
  element.innerHTML = text;
  element.onclick = print;

  return element;
}

document.body.appendChild(getComponent());
