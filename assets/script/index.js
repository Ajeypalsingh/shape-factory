"use strict";

const shapeType = document.querySelector(".select-shape");
const shapeColor = document.querySelector(".select-color");
const createButton = document.querySelector(".create-element");
const gridBox = document.querySelector(".grid-section");
const output = document.querySelector(".info");
console.log(output);

let shapeArray = [];
let divNumber = 0;

class Shape {
  #name;
  #color;

  set name(shape) {
    this.#name = shape;
  }

  set color(color) {
    this.#color = color;
  }

  get name() {
    return this.#name;
  }

  get color() {
    return this.#color;
  }

  getInfo() {
    return `${this.#name} ${this.#color}`;
  }
}

createButton.addEventListener("click", function () {
  divNumber = divNumber + 1;

  const shapes = new Shape(shapeType.value, shapeColor.value);
  shapeArray.push(shapes);
  if (divNumber <= 20) {
    const divElement = document.createElement("div");
    divElement.classList.add(shapeType.value);
    divElement.style.backgroundColor = shapeColor.value;
    gridBox.append(divElement);
    divElement.onclick = () => {
      output.innerHTML = `Shape Number ${shapeArray.indexOf(shapes) + 1} `;
    };
  } else {
    output.innerHTML = `storage full`;
  }
});
