status = "";

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}

function draw(){
    image(video,0,0,480,480)
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.spped(1);
    video.volume(1)
}
