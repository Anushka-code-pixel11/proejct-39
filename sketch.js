var database;
var bg;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;

let mainSong;

function preload(){
  bg = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  mainSong = loadSound("sounds/song.mp3");
}
function setup() {
  createCanvas(1000, 600);
  mainSong.play();
  database = firebase.database();
  fruitGroup = new Group();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(bg);
  
   if (playerCount === 2) {
     game.update(1);
   }

   if (gameState === 1) {
     clear(); 
     game.play();
   }

   if (gameState === 2) {
     game.end();
  }
}