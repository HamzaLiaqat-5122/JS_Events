/* Events in JS
 The change in the state of an object is known as Event.
 Events are fired to notify code of "interesting changes" that may affect code execution.

 1.Mouse events(click, double click etc.)
 2.keyboard events(keypress, keyup, keydown )
 3.Form events(submit etc.)
 4.Print event & many more.
*/
// Event Handling in Js
// <button onclick="console.log('button was clicked'); alert('hello!')">click me!</button> In this HTML line we using an onclick event event and alert event when the button is clicked.
// ondbl click -> on double click an event occurs
// onmouseover -> when mouse is hovered an event occurs
// The use of events in  inline HTML is not a good practice. There is a way to use events in JavaScript.
let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//   console.log("btn was clicked");
//   let a = 25;
//   a++;
//   console.log(a); //26
//   console.log(evt); // evt is event which is an argument.
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX, evt.clientY);
// };
// btn1.innerText = "btn1";

// let box = document.querySelector(".box");
// box.onmouseover = () => {
//   console.log("you are inside box");
// };
// if we write js in inline HTML and In index.js file The js file code will be executed.

/* Event Object
 It is a special object that has detail about the event.
 All event handlers have access to the Event Object's properties and methods.
*/

// Event Listeners.
// node.addEventListener(event, callback)
// node.removeEventListener(event, callback)

// btn1.addEventListener("click", (evt) => {
//     console.log("btn1 was clicked - handler 1");
// });

// btn1.addEventListener("click", (evt) => {
//     console.log("btn1 was clicked - handler 2");
// });

// const handler3 =( (evt) => {
//     console.log("btn1 was clicked - handler 3");
// });

// btn1.addEventListener("click",handler3)

// btn1.addEventListener("click", (evt) => {
//     console.log("btn1 was clicked - handler 4");
// });

// btn1.removeEventListener("click", (evt) => {
//     console.log("btn1 was clicked - handler 1");
// })

// Note: the callback reference should be same to remove also it will not remove if we do not store it in a variable.

// btn1.removeEventListener("click", handler3)

//btn1.removeEventListener("click", (evt) => {
//     console.log("btn1 was clicked - handler 1");
// }) This is not going to work

// Practice Question 1: Create a toggle button that changes the screen to dark-mode when clicked & light mode when clicked again.

let modeBtn = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");
modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }

  console.log(currMode);
});
