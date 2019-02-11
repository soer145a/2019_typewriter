"use strict";
window.addEventListener("DOMContentLoaded", init);
let counter;
let myText;
let slicedText;
let myTextL;

let audioDecider;

let audioSpace = new Audio("typespace.mp3");
let audio1 = new Audio("typekey1.mp3");
let audio2 = new Audio("typekey2.mp3");

function init() {
  myText = document.getElementById("typewriter").textContent;

  myTextL = myText.length;
  counter = 0;

  document.getElementById("typewriter").textContent = "";
  loop();
}
function loop() {
  slicedText = myText.slice(0, counter + 1);
  audioDecider = slicedText.slice(counter);
  counter++;

  if (audioDecider == " ") {
    audioSpace.play();
  } else {
    audio1.play();
  }
  console.log(audioDecider);

  document.getElementById("typewriter").textContent = slicedText;
  if (counter != myTextL) {
    setTimeout(loop, 400);
  } else {
    end();
  }
}
function end() {
  console.log("end");
}
