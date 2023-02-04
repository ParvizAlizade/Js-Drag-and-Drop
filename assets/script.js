let image = document.querySelectorAll("img");
let drag = document.querySelectorAll(".drag");

image.forEach((img) => {
  img.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("id", e.target.id);
  });
});

drag.forEach((drop) => {
  drop.addEventListener("dragover", function (e) {
       e.preventDefault();

  });

  drop.addEventListener("drop", function (e) {
    e.preventDefault();
    let id = e.dataTransfer.getData("id");
    let element = document.getElementById(id);
    this.appendChild(element);
  });
});
