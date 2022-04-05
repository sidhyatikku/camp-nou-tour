window.onload=function(){
  document.getElementById('dotzTire').addEventListener("click", tireChange);
  document.getElementById('dotzDriver').addEventListener("click", driverChange);
  document.getElementById('dotzCockpit').addEventListener("click", cockpitChange);
  document.getElementById('dotzFrontwing').addEventListener("click", frontChange);
  document.getElementById('dotzBackwing').addEventListener("click", backChange);
  document.getElementById('dotzPaddock').addEventListener("click", paddockChange);
  document.getElementById('dotzCommentary').addEventListener("click", comChange);
  document.getElementById('dotzTunnel').addEventListener("click", tunnelChange);
  document.getElementById('dotzCrest').addEventListener("click", crestChange);
  document.getElementById('dotzCrowd').addEventListener("click", crowdChange);
  document.getElementById('goBack').addEventListener("click", backButton);
}

function crowdChange() {
    console.log("onclick okay");

    var imageF1 = document.getElementById('img1');
    var crewBox = new Audio("media/audio/drums.mp3");

    if (imageF1.src.match("media/images/campnou_top.webp")) {
        imageF1.src = "media/images/sideview2.webp";
        document.getElementById('dotzTire').style.visibility="hidden";
        document.getElementById('dotzDriver').style.visibility="hidden";
        document.getElementById('dotzCockpit').style.visibility="hidden";
        document.getElementById('dotzFrontwing').style.visibility="hidden";
        document.getElementById('dotzBackwing').style.visibility="hidden";
        document.getElementById('dotzPaddock').style.visibility="hidden";
        document.getElementById('dotzCommentary').style.visibility="hidden";
        document.getElementById('dotzTunnel').style.visibility="hidden";
        document.getElementById('dotzCrest').style.visibility="hidden";
        document.getElementById('dotzCrowd').style.visibility="hidden";
        document.getElementById('goBack').style.visibility="visible";
        crewBox.play();

    }
    else {
        imageF1.src = "media/images/campnou_top.webp";
        document.getElementById('dotzTire').style.visibility="visible";
        document.getElementById('dotzDriver').style.visibility="visible";
        document.getElementById('dotzCockpit').style.visibility="visible";
        document.getElementById('dotzFrontwing').style.visibility="visible";
        document.getElementById('dotzBackwing').style.visibility="visible";
        document.getElementById('dotzPaddock').style.visibility="visible";
        document.getElementById('dotzCommentary').style.visibility="visible";
        document.getElementById('dotzTunnel').style.visibility="visible";
        document.getElementById('dotzCrest').style.visibility="visible";
        document.getElementById('dotzCrowd').style.visibility="visible";
        document.getElementById('goBack').style.visibility="hidden";
    }
}

function crestChange() {
    console.log("onclick okay");

    var imageF1 = document.getElementById('img1');
    var crewBox = new Audio("media/audio/barca.mp3");

    if (imageF1.src.match("media/images/campnou_top.webp")) {
        imageF1.src = "media/images/crest.jpeg";
        document.getElementById('dotzTire').style.visibility="hidden";
        document.getElementById('dotzDriver').style.visibility="hidden";
        document.getElementById('dotzCockpit').style.visibility="hidden";
        document.getElementById('dotzFrontwing').style.visibility="hidden";
        document.getElementById('dotzBackwing').style.visibility="hidden";
        document.getElementById('dotzPaddock').style.visibility="hidden";
        document.getElementById('dotzCommentary').style.visibility="hidden";
        document.getElementById('dotzTunnel').style.visibility="hidden";
        document.getElementById('dotzCrest').style.visibility="hidden";
        document.getElementById('dotzCrowd').style.visibility="hidden";
        document.getElementById('goBack').style.visibility="visible";
        crewBox.play();

    }
    else {
        imageF1.src = "media/images/campnou_top.webp";
        document.getElementById('dotzTire').style.visibility="visible";
        document.getElementById('dotzDriver').style.visibility="visible";
        document.getElementById('dotzCockpit').style.visibility="visible";
        document.getElementById('dotzFrontwing').style.visibility="visible";
        document.getElementById('dotzBackwing').style.visibility="visible";
        document.getElementById('dotzPaddock').style.visibility="visible";
        document.getElementById('dotzCommentary').style.visibility="visible";
        document.getElementById('dotzTunnel').style.visibility="visible";
        document.getElementById('dotzCrest').style.visibility="visible";
        document.getElementById('dotzCrowd').style.visibility="visible";
        document.getElementById('goBack').style.visibility="hidden";
    }
}

function tunnelChange() {
    console.log("onclick okay");

    var imageF1 = document.getElementById('img1');
    var crewBox = new Audio("media/audio/tunnel.mp3");

    if (imageF1.src.match("media/images/campnou_top.webp")) {
        imageF1.src = "media/images/tunnel2.jpeg";
        document.getElementById('dotzTire').style.visibility="hidden";
        document.getElementById('dotzDriver').style.visibility="hidden";
        document.getElementById('dotzCockpit').style.visibility="hidden";
        document.getElementById('dotzFrontwing').style.visibility="hidden";
        document.getElementById('dotzBackwing').style.visibility="hidden";
        document.getElementById('dotzPaddock').style.visibility="hidden";
        document.getElementById('dotzCommentary').style.visibility="hidden";
        document.getElementById('dotzTunnel').style.visibility="hidden";
        document.getElementById('dotzCrest').style.visibility="hidden";
        document.getElementById('dotzCrowd').style.visibility="hidden";
        document.getElementById('goBack').style.visibility="visible";
        crewBox.play();

    }
    else {
        imageF1.src = "media/images/campnou_top.webp";
        document.getElementById('dotzTire').style.visibility="visible";
        document.getElementById('dotzDriver').style.visibility="visible";
        document.getElementById('dotzCockpit').style.visibility="visible";
        document.getElementById('dotzFrontwing').style.visibility="visible";
        document.getElementById('dotzBackwing').style.visibility="visible";
        document.getElementById('dotzPaddock').style.visibility="visible";
        document.getElementById('dotzCommentary').style.visibility="visible";
        document.getElementById('dotzTunnel').style.visibility="visible";
        document.getElementById('dotzCrest').style.visibility="visible";
        document.getElementById('dotzCrowd').style.visibility="visible";
        document.getElementById('goBack').style.visibility="hidden";
    }
}

function tireChange() {
    console.log("onclick okay");

    var imageF1 = document.getElementById('img1');
    var crewBox = new Audio("media/audio/ale.mp3");

    if (imageF1.src.match("media/images/campnou_top.webp")) {
        imageF1.src = "media/images/sideview3.jpeg";
        document.getElementById('dotzTire').style.visibility="hidden";
        document.getElementById('dotzDriver').style.visibility="hidden";
        document.getElementById('dotzCockpit').style.visibility="hidden";
        document.getElementById('dotzFrontwing').style.visibility="hidden";
        document.getElementById('dotzBackwing').style.visibility="hidden";
        document.getElementById('dotzPaddock').style.visibility="hidden";
        document.getElementById('dotzCommentary').style.visibility="hidden";
        document.getElementById('dotzTunnel').style.visibility="hidden";
        document.getElementById('dotzCrest').style.visibility="hidden";
        document.getElementById('dotzCrowd').style.visibility="hidden";
        document.getElementById('goBack').style.visibility="visible";
        crewBox.play();

    }
    else {
        imageF1.src = "media/images/campnou_top.webp";
        document.getElementById('dotzTire').style.visibility="visible";
        document.getElementById('dotzDriver').style.visibility="visible";
        document.getElementById('dotzCockpit').style.visibility="visible";
        document.getElementById('dotzFrontwing').style.visibility="visible";
        document.getElementById('dotzBackwing').style.visibility="visible";
        document.getElementById('dotzPaddock').style.visibility="visible";
        document.getElementById('dotzCommentary').style.visibility="visible";
        document.getElementById('dotzTunnel').style.visibility="visible";
        document.getElementById('dotzCrest').style.visibility="visible";
        document.getElementById('dotzCrowd').style.visibility="visible";
        document.getElementById('goBack').style.visibility="hidden";
    }
}


function driverChange() {
    console.log("onclick okay");

    var imageF1 = document.getElementById('img1');
    var crewBox = new Audio("media/audio/topclass.mp3");

    if (imageF1.src.match("media/images/campnou_top.webp")) {
        imageF1.src = "media/images/museum.jpeg";
        document.getElementById('dotzTire').style.visibility="hidden";
        document.getElementById('dotzDriver').style.visibility="hidden";
        document.getElementById('dotzCockpit').style.visibility="hidden";
        document.getElementById('dotzFrontwing').style.visibility="hidden";
        document.getElementById('dotzBackwing').style.visibility="hidden";
        document.getElementById('dotzPaddock').style.visibility="hidden";
        document.getElementById('dotzCommentary').style.visibility="hidden";
        document.getElementById('dotzTunnel').style.visibility="hidden";
        document.getElementById('dotzCrest').style.visibility="hidden";
        document.getElementById('dotzCrowd').style.visibility="hidden";
        document.getElementById('goBack').style.visibility="visible";
        crewBox.play();

    }
    else {
        imageF1.src = "media/images/campnou_top.webp";
        document.getElementById('dotzTire').style.visibility="visible";
        document.getElementById('dotzDriver').style.visibility="visible";
        document.getElementById('dotzCockpit').style.visibility="visible";
        document.getElementById('dotzFrontwing').style.visibility="visible";
        document.getElementById('dotzBackwing').style.visibility="visible";
        document.getElementById('dotzPaddock').style.visibility="visible";
        document.getElementById('dotzCommentary').style.visibility="visible";
        document.getElementById('dotzTunnel').style.visibility="visible";
        document.getElementById('dotzCrest').style.visibility="visible";
        document.getElementById('dotzCrowd').style.visibility="visible";
        document.getElementById('goBack').style.visibility="hidden";
    }
}

function cockpitChange() {
    console.log("onclick okay");

    var imageF1 = document.getElementById('img1');
    var crewBox = new Audio("media/audio/locker.mp3");

    if (imageF1.src.match("media/images/campnou_top.webp")) {
        imageF1.src = "media/images/locker.jpeg";
        document.getElementById('dotzTire').style.visibility="hidden";
        document.getElementById('dotzDriver').style.visibility="hidden";
        document.getElementById('dotzCockpit').style.visibility="hidden";
        document.getElementById('dotzFrontwing').style.visibility="hidden";
        document.getElementById('dotzBackwing').style.visibility="hidden";
        document.getElementById('dotzPaddock').style.visibility="hidden";
        document.getElementById('dotzCommentary').style.visibility="hidden";
        document.getElementById('dotzTunnel').style.visibility="hidden";
        document.getElementById('dotzCrest').style.visibility="hidden";
        document.getElementById('dotzCrowd').style.visibility="hidden";
        document.getElementById('goBack').style.visibility="visible";
        crewBox.play();

    }
    else {
        imageF1.src = "media/images/campnou_top.webp";
        document.getElementById('dotzTire').style.visibility="visible";
        document.getElementById('dotzDriver').style.visibility="visible";
        document.getElementById('dotzCockpit').style.visibility="visible";
        document.getElementById('dotzFrontwing').style.visibility="visible";
        document.getElementById('dotzBackwing').style.visibility="visible";
        document.getElementById('dotzPaddock').style.visibility="visible";
        document.getElementById('dotzCommentary').style.visibility="visible";
        document.getElementById('dotzTunnel').style.visibility="visible";
        document.getElementById('dotzCrest').style.visibility="visible";
        document.getElementById('dotzCrowd').style.visibility="visible";
        document.getElementById('goBack').style.visibility="hidden";
    }
}

function paddockChange() {
    console.log("onclick okay");

    var imageF1 = document.getElementById('img1');
    var crewBox = new Audio("media/audio/cant.mp3");

    if (imageF1.src.match("media/images/campnou_top.webp")) {
        imageF1.src = "media/images/future.jpeg";
        document.getElementById('dotzTire').style.visibility="hidden";
        document.getElementById('dotzDriver').style.visibility="hidden";
        document.getElementById('dotzCockpit').style.visibility="hidden";
        document.getElementById('dotzFrontwing').style.visibility="hidden";
        document.getElementById('dotzBackwing').style.visibility="hidden";
        document.getElementById('dotzPaddock').style.visibility="hidden";
        document.getElementById('dotzCommentary').style.visibility="hidden";
        document.getElementById('dotzTunnel').style.visibility="hidden";
        document.getElementById('dotzCrest').style.visibility="hidden";
        document.getElementById('dotzCrowd').style.visibility="hidden";
        document.getElementById('goBack').style.visibility="visible";
        crewBox.play();

    }
    else {
        imageF1.src = "media/images/campnou_top.webp";
        document.getElementById('dotzTire').style.visibility="visible";
        document.getElementById('dotzDriver').style.visibility="visible";
        document.getElementById('dotzCockpit').style.visibility="visible";
        document.getElementById('dotzFrontwing').style.visibility="visible";
        document.getElementById('dotzBackwing').style.visibility="visible";
        document.getElementById('dotzPaddock').style.visibility="visible";
        document.getElementById('dotzCommentary').style.visibility="visible";
        document.getElementById('dotzTunnel').style.visibility="visible";
        document.getElementById('dotzCrest').style.visibility="visible";
        document.getElementById('dotzCrowd').style.visibility="visible";
        document.getElementById('goBack').style.visibility="hidden";
    }
}

function comChange() {
    console.log("onclick okay");

    var imageF1 = document.getElementById('img1');
    var crewBox = new Audio("media/audio/champ.mp3");

    if (imageF1.src.match("media/images/campnou_top.webp")) {
        imageF1.src = "media/images/champs.jpg";
        document.getElementById('dotzTire').style.visibility="hidden";
        document.getElementById('dotzDriver').style.visibility="hidden";
        document.getElementById('dotzCockpit').style.visibility="hidden";
        document.getElementById('dotzFrontwing').style.visibility="hidden";
        document.getElementById('dotzBackwing').style.visibility="hidden";
        document.getElementById('dotzPaddock').style.visibility="hidden";
        document.getElementById('dotzCommentary').style.visibility="hidden";
        document.getElementById('dotzTunnel').style.visibility="hidden";
        document.getElementById('dotzCrest').style.visibility="hidden";
        document.getElementById('dotzCrowd').style.visibility="hidden";
        document.getElementById('goBack').style.visibility="visible";
        crewBox.play();

    }
    else {
        imageF1.src = "media/images/campnou_top.webp";
        document.getElementById('dotzTire').style.visibility="visible";
        document.getElementById('dotzDriver').style.visibility="visible";
        document.getElementById('dotzCockpit').style.visibility="visible";
        document.getElementById('dotzFrontwing').style.visibility="visible";
        document.getElementById('dotzBackwing').style.visibility="visible";
        document.getElementById('dotzPaddock').style.visibility="visible";
        document.getElementById('dotzCommentary').style.visibility="visible";
        document.getElementById('dotzTunnel').style.visibility="visible";
        document.getElementById('dotzCrest').style.visibility="visible";
        document.getElementById('dotzCrowd').style.visibility="visible";
        document.getElementById('goBack').style.visibility="hidden";
    }
}

function backChange() {
    console.log("onclick okay");

    var imageF1 = document.getElementById('img1');
    var crewBox = new Audio("media/audio/ucl.mp3");

    if (imageF1.src.match("media/images/campnou_top.webp")) {
        imageF1.src = "media/images/sideview1.webp";
        document.getElementById('dotzTire').style.visibility="hidden";
        document.getElementById('dotzDriver').style.visibility="hidden";
        document.getElementById('dotzCockpit').style.visibility="hidden";
        document.getElementById('dotzFrontwing').style.visibility="hidden";
        document.getElementById('dotzBackwing').style.visibility="hidden";
        document.getElementById('dotzPaddock').style.visibility="hidden";
        document.getElementById('dotzCommentary').style.visibility="hidden";
        document.getElementById('dotzTunnel').style.visibility="hidden";
        document.getElementById('dotzCrest').style.visibility="hidden";
        document.getElementById('dotzCrowd').style.visibility="hidden";
        document.getElementById('goBack').style.visibility="visible";
        crewBox.play();

    }
    else {
        imageF1.src = "media/images/campnou_top.webp";
        document.getElementById('dotzTire').style.visibility="visible";
        document.getElementById('dotzDriver').style.visibility="visible";
        document.getElementById('dotzCockpit').style.visibility="visible";
        document.getElementById('dotzFrontwing').style.visibility="visible";
        document.getElementById('dotzBackwing').style.visibility="visible";
        document.getElementById('dotzPaddock').style.visibility="visible";
        document.getElementById('dotzCommentary').style.visibility="visible";
        document.getElementById('dotzTunnel').style.visibility="visible";
        document.getElementById('dotzCrest').style.visibility="visible";
        document.getElementById('dotzCrowd').style.visibility="visible";
        document.getElementById('goBack').style.visibility="hidden";
    }
}

function frontChange() {
    console.log("onclick okay");

    var imageF1 = document.getElementById('img1');
    var crewBox = new Audio("media/audio/messi.mp3");

    if (imageF1.src.match("media/images/campnou_top.webp")) {
        imageF1.src = "media/images/homedugout.jpeg";
        document.getElementById('dotzTire').style.visibility="hidden";
        document.getElementById('dotzDriver').style.visibility="hidden";
        document.getElementById('dotzCockpit').style.visibility="hidden";
        document.getElementById('dotzFrontwing').style.visibility="hidden";
        document.getElementById('dotzBackwing').style.visibility="hidden";
        document.getElementById('dotzPaddock').style.visibility="hidden";
        document.getElementById('dotzCommentary').style.visibility="hidden";
        document.getElementById('dotzTunnel').style.visibility="hidden";
        document.getElementById('dotzCrest').style.visibility="hidden";
        document.getElementById('dotzCrowd').style.visibility="hidden";
        document.getElementById('goBack').style.visibility="visible";
        crewBox.play();

    }
    else {
        imageF1.src = "media/images/campnou_top.webp";
        document.getElementById('dotzTire').style.visibility="visible";
        document.getElementById('dotzDriver').style.visibility="visible";
        document.getElementById('dotzCockpit').style.visibility="visible";
        document.getElementById('dotzFrontwing').style.visibility="visible";
        document.getElementById('dotzBackwing').style.visibility="visible";
        document.getElementById('dotzPaddock').style.visibility="visible";
        document.getElementById('dotzCommentary').style.visibility="visible";
        document.getElementById('dotzTunnel').style.visibility="visible";
        document.getElementById('dotzCrest').style.visibility="visible";
        document.getElementById('dotzCrowd').style.visibility="visible";
        document.getElementById('goBack').style.visibility="hidden";
    }
}

function backButton() {
  var imageF1 = document.getElementById('img1');
  var pitStop = new Audio("media/audio/pitstop.mp3");

  imageF1.src = "media/images/campnou_top.webp";
  document.getElementById('dotzTire').style.visibility="visible";
  document.getElementById('dotzDriver').style.visibility="visible";
  document.getElementById('dotzCockpit').style.visibility="visible";
  document.getElementById('dotzFrontwing').style.visibility="visible";
  document.getElementById('dotzBackwing').style.visibility="visible";
  document.getElementById('dotzPaddock').style.visibility="visible";
  document.getElementById('dotzCommentary').style.visibility="visible";
  document.getElementById('dotzTunnel').style.visibility="visible";
  document.getElementById('dotzCrest').style.visibility="visible";
  document.getElementById('dotzCrowd').style.visibility="visible";
  document.getElementById('goBack').style.visibility="hidden";
  pitStop.play();
}
