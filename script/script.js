const colors = {
  blue: "hsl(240, 76%, 37%)",
  green: "hsl(140, 75%, 25%)",
  red: "hsl(352, 79%, 46%)",
  lightblue: "hsl(184, 90%, 35%)",
  pink: "hsl(325, 77%, 45%)",
};

let body = document.querySelector("body");
let submit = document.querySelector(".button");
let h1 = document.querySelector("h1");

let button = document.querySelectorAll("button").forEach((item) => {
  item.classList.remove("active");
  item.onclick = function (e) {
    body.style.background = colors[item.id];
    submit.style.background = colors[item.id];
    h1.style.borderColor = colors[item.id];
    remove();
  };
});

function remove() {
  let button = document.querySelectorAll("button").forEach((item) => {
    item.classList.remove("active");
  });
  event.target.classList.add("active");
}
