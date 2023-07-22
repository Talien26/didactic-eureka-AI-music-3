var song = '';
var song2 = '';
var leftWristX = '';
var leftWristY = '';
var rightWristX = '';
var rightWristY = '';

function preload(){
    song = loadSound('music.mp3');
    song2 = loadSound('music2.mp3');
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is initialized!')
} 
function draw(){
    image(video, 0, 0, 650, 500);
}
function noise(){
    song.play();
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left wrist X = " + leftWristX + " And Left wrist Y = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right wrist X = " + rightWristX + " And right wrist Y = " + rightWristY);
    }
}