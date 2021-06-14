function preload(){}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 230, 150, 220, 200);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(600, 50, 80);
    
    fill(0, 0, 250);
    stroke(0, 0, 250);
    circle(50, 450, 80);

    fill(255, 128, 250);
    stroke(255, 128, 250);
    circle(600, 450, 80);
}

function take_snapshot()
{
    save("Funframe.png")
}