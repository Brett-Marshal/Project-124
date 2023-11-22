function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 450);

    canvas = createCanvas(500, 450);
    canvas.position(750, 150);

    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on("pose", gotPoses);
}

function ModelLoaded()
{
    console.log("Model is Inizialised");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}