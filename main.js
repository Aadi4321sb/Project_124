function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 450);
    canvas.position(550,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#FFFF00');
}
function modelLoaded() {
    console.log('PoseNet Is now active!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
    }
}