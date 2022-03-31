
function setup()
{
    canvas = createCanvas(300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded()
{
    console.log("PoseNet is Loaded");
}

    function preload()
{
    earImage = loadImage("https://i.postimg.cc/m2S2DRd8/images-removebg-preview.png");
    gogglesImage = loadImage("https://i.postimg.cc/XNF8GD6r/pokowai-arch-polarized-sunglasses-red-removebg-preview.png");
    moustacheImage = loadImage("https://i.postimg.cc/76N8j215/istockphoto-934194258-612x612-removebg-preview.png")
}

noseX = 0;
noseY = 0;
goggleX = 0;
goggleY = 0;
moustacheX = 0;
moustacheY = 0;

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-80;
        noseY = results[0].pose.nose.y-190;
        goggleX = results[0].pose.nose.x-38;
        goggleY = results[0].pose.nose.y-80;
        moustacheX = results[0].pose.nose.x-22;
        moustacheY = results[0].pose.nose.y-13;
        console.log("Nose x =" + noseX);
        console.log("Nose y =" + noseY);
    }
}

function draw()
{
    image(video , 0 , 0 , 300 , 300);
    image(earImage,noseX,noseY,150,150);
    image(gogglesImage,goggleX,goggleY,80,80);
    image(moustacheImage,moustacheX,moustacheY,50,50);
}


function take_snapshot()
{
    save('myFilterImage.png');
}
