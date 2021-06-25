function preload(){

}
function setup(){
    canvas = createCanvas(640,480)
    canvas.center()
video = createCapture(VIDEO)
video.hide()
tintcolor = ""
}
function draw(){
    image(video,160,110,320,240)
    fill("orange")
    stroke("indigo")
    rect(90,70,440,30)
    rect(90,360,440,30)
    rect(90,70,30,320)
    rect(500,70,30,320)

}
function take_snapshot(){
    save('Filtered_selfie.png')
}