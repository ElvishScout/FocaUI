import { Component } from "../component";
import "./style.css";

export let fapp: Component<HTMLDivElement> = {
  name: "fapp",
  render(elem, callback) {
    let newElem = document.createElement("div");
    return newElem;
  },
};
