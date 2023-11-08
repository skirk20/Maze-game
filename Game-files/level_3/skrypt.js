var canvas = $('#GameBoardCanvas');

//układ ścian
var board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1],
  [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, -1]  
];

var player = {
  x: 0,
  y: 0
};


//rysowanie planszy
function draw() {
  var width = canvas.width();
  var blockSize = 20;
  var ctx = canvas[0].getContext('2d');
  ctx.clearRect(0, 0, width, width);
  ctx.fillStyle = "white";
  //
  for (var y = 0; y < board.length; y++) {
    for (var x = 0; x < board[y].length; x++) {
      //rysowanie ścian
      if (board[y][x] === 1) {
        ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
      }
      //meta
      else if (board[y][x] === -1) {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = "green";
        ctx.moveTo(x * blockSize, y * blockSize);
        ctx.lineTo((x + 1) * blockSize, (y + 1) * blockSize);
        ctx.moveTo(x * blockSize, (y + 1) * blockSize);
        ctx.lineTo((x + 1) * blockSize, y * blockSize);
        ctx.stroke();
      }
    }
  }
  //rsowanie gracza
  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.fillRect(player.x * blockSize,player.y * blockSize,20,20);
  ctx.fill();

}

//puste ścieżki kolizja border canvasu
function canMove(x, y) {
  return (y >= 0) && (y < board.length) && (x >= 0) && (x < board[y].length) && (board[y][x] != 1);
}


//ruch
$(document).keydown(function(e) {
  if ((e.which == 38) && canMove(player.x, player.y - 1)) //Up arrow
    player.y--;
  else if ((e.which == 40) && canMove(player.x, player.y + 1)) // down arrow
    player.y++;
  else if ((e.which == 37) && canMove(player.x - 1, player.y))
    player.x--;
  else if ((e.which == 39) && canMove(player.x + 1, player.y))
    player.x++;
  draw();
  e.preventDefault();
    if(player["x"]===24 && player["y"]===24){
      const winAlert = document.querySelector(".h1-win");
      const winAlert2 = document.querySelector(".h1-next");
      winAlert.classList.add("normal");
      winAlert2.classList.add("normal");
}
});

draw();
//SETTINGS AQUIRE
const wrapper = document.querySelector(".wrapper");
if (localStorage.getItem("bgOption") == 1) {
  wrapper.classList.add("red-set");
}
if (localStorage.getItem("bgOption") == 2) {
  wrapper.classList.add("blue-set");
}
if (localStorage.getItem("bgOption") == 3) {
  wrapper.classList.add("black-set");
}
//MUSIC MUTE/ON
window.addEventListener("load", themesongCreate);

function themesongCreate(e) {
  music = new Audio();
  music.src = "audio/epyc_theme.mp3";
  music.loop = true;
  music.volume = 1;
}

const muteON = document.querySelector(".d1");
const muteOFF = document.querySelector(".d2");
muteOFF.addEventListener("click", FromMuteToPlay);
muteON.addEventListener("click", FromPlayToMute);
muteON.classList.add("display");

function FromMuteToPlay() {
  muteOFF.classList.add("display");
  muteON.classList.remove("display");
  music.play();
}

function FromPlayToMute() {
  muteON.classList.add("display");
  muteOFF.classList.remove("display");
  music.pause();
}
//timer
const timer = document.getElementById('stopwatch');

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
  }
}
window.addEventListener('keydown', function (e) {
  console.log(e);
  timer.key = e.keyCode;
  console.log(e.keyCode);
  if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40) {
    startTimer();
  }
})

function timerCycle() {
  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }
    timer.innerHTML = hr + ':' + min + ':' + sec;
    setTimeout("timerCycle()", 1000);
    const stop = document.querySelector(".h1-next");
    if(stop.classList.contains("normal")){
      stoptime=true;
    }
  }
}