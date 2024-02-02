import jQuery from "jquery";
import "./style.css";
import components from "./components";

function rendered(elem: Element) {
  let tagName = elem.tagName.toLowerCase();
  if (tagName in components) {
    let newElem = components[tagName].rendered(elem);
    while (elem.firstChild) {
      let child = elem.removeChild(elem.firstChild);
      if (child instanceof Element) {
        child = rendered(child);
      }
      newElem.appendChild(child);
    }
    return newElem;
  }
  return elem;
}

let app = document.querySelector("fapp") || document.querySelector(".fapp");

if (!app) {
  throw "fapp not found.";
}

app.replaceWith(rendered(app));
