import { Component } from "../component";
import "./style.css";

export let fbutton: Component<HTMLButtonElement> = {
  name: "fbutton",
  render(elem, callback) {
    let newElem = document.createElement("button");
    return newElem;
  },
};
