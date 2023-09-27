// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// document.addEventListener(
//   "click",
//   (e) => {
//     console.log("document 1 capture");
//   },
//   { capture: true }
// );

// document.addEventListener("click", (e) => {
//   console.log("document 1 bubble");
// });

// grandparent.addEventListener(
//   "click",
//   (e) => {
//     console.log("grandparent capture");
//   },
//   {
//     capture: true,
//   }
// );

// grandparent.addEventListener("click", (e) => {
//   console.log("grandparent bubble");
// });

// parent.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("parent capture");
//   },
//   { capture: true }
// );

// parent.addEventListener("click", (e) => {
//   console.log("parent bubble");
// });

// child.addEventListener(
//   "click",
//   (e) => {
//     console.log("child capture");
//   },
//   { capture: true }
// );

// child.addEventListener("click", (e) => {
//   console.log("child bubble");
// });

// Sometimes there are things that can happen that prevent the event from going through the entire capture and bubble phases
// And this is what happens when you stop the progation of an event
// We also have an object that we can pass in called "once" that you can set to true so the event only runs once
// How do you deligate events -> this is important when you want to dynamically add events to your page

const divs = document.querySelectorAll("div");

// divs.forEach((div) => {
//   div.addEventListener("click", (e) => {
//     console.log("divs");
//   });
// });

addGlobalEventListener("click", "div", (e) => {
  console.log("divs");
});

// document.addEventListener("click", (e) => {
//   if (e.target.matches("div")) {
//     console.log("divs");
//   }
// });

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

const newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "purple";
document.body.appendChild(newDiv);
