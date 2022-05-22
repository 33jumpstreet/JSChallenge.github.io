// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>
/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  handlemouseEnter() {
    title.innerText = "The mouse is here";
    title.style.color = colors[0];
  },

  handleMouseLeave() {
    title.innerText = "The mouse is gone";
    title.style.color = colors[1];
  },

  handleWindowResize() {
    title.innerText = "you just resized!!!";
    title.style.color = colors[2];
  },

  handleWindowContextMenu() {
    title.innerText = "That was a right click!";
    title.style.color = colors[4];
  }
};

const title = document.querySelector("h2");

title.addEventListener("mouseenter", superEventHandler.handlemouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener(
  "contextmenu",
  superEventHandler.handleWindowContextMenu
);
