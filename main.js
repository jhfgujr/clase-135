object_detector="";
img="";
status="";
objects=[];


function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function preload(){
    video=createVideo("video.mp4");

}


function setup(){
    canvas= createCanvas (420,380);
    canvas.center ();
    video.hide();
}
function iniciarvideo(){
    object_detector = ml5.objectDetector("cocossd", plastico);
    document.getElementById("Estatus_del_objeto").innerHTML="El objecto se esta Analizando";
}
function plastico(){
    console.log("Modelo ya Cargado");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(1);
}
function draw(){
    image(video, 0, 0, 420, 380);
    if(status != ""){
        object_detector.detect(video,gotResult);
        for (i =0; i < objects.length; i++){
            document.getElementById("Estatus_del_objeto").innerHTML = "Estatus: Objeto Detectado"
            document.getElementById("object").innerHTML="Numero de objeto detectado: "+ objects.length;
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " "+ percent +"%", objects[i].x,objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height ); 
        }
          
    }
    

}