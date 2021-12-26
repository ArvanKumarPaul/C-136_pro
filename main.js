status = "";

function preload() {

  

}

function setup() {

  canvas = createCanvas(400,275);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {

  image(video,0,0,400,275);

}

function start() {

  objectDetector = ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
  document.getElementById("text_inp").value;

}

function modelLoaded() {

  console.log("Model Loaded");
  status = true;

}