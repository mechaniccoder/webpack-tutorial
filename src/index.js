import "./style.css";
import Icon from "./tdd.png";

function getComponent() {
  const element = document.createElement("div");

  return import("lodash").then(({default: _}) => {
    const element = document.createElement("div");
    element.classList.add("hello");
    element.innerHTML = _.join(["hello", "world"], " ");

    const icon = new Image();
    icon.src = Icon;

    element.appendChild(icon);

    return element;
  });
}

getComponent().then((element) => {
  document.body.appendChild(element);
});
