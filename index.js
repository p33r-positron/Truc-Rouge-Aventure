const chalk = require("chalk");
const colors = require("colors");
const os = require("os");
const child_process = require("child_process");
const readline = require("readline");
const path = require("path");

if(os.type() == "Windows_NT"){child_process.exec("chcp 65001 > nul");}; //Pour pouvoir afficher les accents sur Windaube
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
const rl = readline.createInterface({"input": process.stdin, "output": process.stdout})
var screen = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
const template = `[x0y0][x0y1][x0y2][x0y3][x0y4][x0y5][x0y6][x0y7][x0y8][x0y9][x0y10][x0y11][x0y12][x0y13][x0y14][x0y15][x0y16][x0y17][x0y18][x0y19][x0y20][x0y21][x0y22][x0y23][x0y24][x0y25][x0y26][x0y27][x0y28][x0y29][x0y30][x0y31][x0y32][x0y33][x0y34][x0y35][x0y36][x0y37][x0y38][x0y39][x0y40][x0y41][x0y42][x0y43][x0y44][x0y45][x0y46][x0y47][x0y48][x0y49]
[x1y0][x1y1][x1y2][x1y3][x1y4][x1y5][x1y6][x1y7][x1y8][x1y9][x1y10][x1y11][x1y12][x1y13][x1y14][x1y15][x1y16][x1y17][x1y18][x1y19][x1y20][x1y21][x1y22][x1y23][x1y24][x1y25][x1y26][x1y27][x1y28][x1y29][x1y30][x1y31][x1y32][x1y33][x1y34][x1y35][x1y36][x1y37][x1y38][x1y39][x1y40][x1y41][x1y42][x1y43][x1y44][x1y45][x1y46][x1y47][x1y48][x1y49]
[x2y0][x2y1][x2y2][x2y3][x2y4][x2y5][x2y6][x2y7][x2y8][x2y9][x2y10][x2y11][x2y12][x2y13][x2y14][x2y15][x2y16][x2y17][x2y18][x2y19][x2y20][x2y21][x2y22][x2y23][x2y24][x2y25][x2y26][x2y27][x2y28][x2y29][x2y30][x2y31][x2y32][x2y33][x2y34][x2y35][x2y36][x2y37][x2y38][x2y39][x2y40][x2y41][x2y42][x2y43][x2y44][x2y45][x2y46][x2y47][x2y48][x2y49]
[x3y0][x3y1][x3y2][x3y3][x3y4][x3y5][x3y6][x3y7][x3y8][x3y9][x3y10][x3y11][x3y12][x3y13][x3y14][x3y15][x3y16][x3y17][x3y18][x3y19][x3y20][x3y21][x3y22][x3y23][x3y24][x3y25][x3y26][x3y27][x3y28][x3y29][x3y30][x3y31][x3y32][x3y33][x3y34][x3y35][x3y36][x3y37][x3y38][x3y39][x3y40][x3y41][x3y42][x3y43][x3y44][x3y45][x3y46][x3y47][x3y48][x3y49]
[x4y0][x4y1][x4y2][x4y3][x4y4][x4y5][x4y6][x4y7][x4y8][x4y9][x4y10][x4y11][x4y12][x4y13][x4y14][x4y15][x4y16][x4y17][x4y18][x4y19][x4y20][x4y21][x4y22][x4y23][x4y24][x4y25][x4y26][x4y27][x4y28][x4y29][x4y30][x4y31][x4y32][x4y33][x4y34][x4y35][x4y36][x4y37][x4y38][x4y39][x4y40][x4y41][x4y42][x4y43][x4y44][x4y45][x4y46][x4y47][x4y48][x4y49]
[x5y0][x5y1][x5y2][x5y3][x5y4][x5y5][x5y6][x5y7][x5y8][x5y9][x5y10][x5y11][x5y12][x5y13][x5y14][x5y15][x5y16][x5y17][x5y18][x5y19][x5y20][x5y21][x5y22][x5y23][x5y24][x5y25][x5y26][x5y27][x5y28][x5y29][x5y30][x5y31][x5y32][x5y33][x5y34][x5y35][x5y36][x5y37][x5y38][x5y39][x5y40][x5y41][x5y42][x5y43][x5y44][x5y45][x5y46][x5y47][x5y48][x5y49]
[x6y0][x6y1][x6y2][x6y3][x6y4][x6y5][x6y6][x6y7][x6y8][x6y9][x6y10][x6y11][x6y12][x6y13][x6y14][x6y15][x6y16][x6y17][x6y18][x6y19][x6y20][x6y21][x6y22][x6y23][x6y24][x6y25][x6y26][x6y27][x6y28][x6y29][x6y30][x6y31][x6y32][x6y33][x6y34][x6y35][x6y36][x6y37][x6y38][x6y39][x6y40][x6y41][x6y42][x6y43][x6y44][x6y45][x6y46][x6y47][x6y48][x6y49]
[x7y0][x7y1][x7y2][x7y3][x7y4][x7y5][x7y6][x7y7][x7y8][x7y9][x7y10][x7y11][x7y12][x7y13][x7y14][x7y15][x7y16][x7y17][x7y18][x7y19][x7y20][x7y21][x7y22][x7y23][x7y24][x7y25][x7y26][x7y27][x7y28][x7y29][x7y30][x7y31][x7y32][x7y33][x7y34][x7y35][x7y36][x7y37][x7y38][x7y39][x7y40][x7y41][x7y42][x7y43][x7y44][x7y45][x7y46][x7y47][x7y48][x7y49]
[x8y0][x8y1][x8y2][x8y3][x8y4][x8y5][x8y6][x8y7][x8y8][x8y9][x8y10][x8y11][x8y12][x8y13][x8y14][x8y15][x8y16][x8y17][x8y18][x8y19][x8y20][x8y21][x8y22][x8y23][x8y24][x8y25][x8y26][x8y27][x8y28][x8y29][x8y30][x8y31][x8y32][x8y33][x8y34][x8y35][x8y36][x8y37][x8y38][x8y39][x8y40][x8y41][x8y42][x8y43][x8y44][x8y45][x8y46][x8y47][x8y48][x8y49]
[x9y0][x9y1][x9y2][x9y3][x9y4][x9y5][x9y6][x9y7][x9y8][x9y9][x9y10][x9y11][x9y12][x9y13][x9y14][x9y15][x9y16][x9y17][x9y18][x9y19][x9y20][x9y21][x9y22][x9y23][x9y24][x9y25][x9y26][x9y27][x9y28][x9y29][x9y30][x9y31][x9y32][x9y33][x9y34][x9y35][x9y36][x9y37][x9y38][x9y39][x9y40][x9y41][x9y42][x9y43][x9y44][x9y45][x9y46][x9y47][x9y48][x9y49]
[x10y0][x10y1][x10y2][x10y3][x10y4][x10y5][x10y6][x10y7][x10y8][x10y9][x10y10][x10y11][x10y12][x10y13][x10y14][x10y15][x10y16][x10y17][x10y18][x10y19][x10y20][x10y21][x10y22][x10y23][x10y24][x10y25][x10y26][x10y27][x10y28][x10y29][x10y30][x10y31][x10y32][x10y33][x10y34][x10y35][x10y36][x10y37][x10y38][x10y39][x10y40][x10y41][x10y42][x10y43][x10y44][x10y45][x10y46][x10y47][x10y48][x10y49]
[x11y0][x11y1][x11y2][x11y3][x11y4][x11y5][x11y6][x11y7][x11y8][x11y9][x11y10][x11y11][x11y12][x11y13][x11y14][x11y15][x11y16][x11y17][x11y18][x11y19][x11y20][x11y21][x11y22][x11y23][x11y24][x11y25][x11y26][x11y27][x11y28][x11y29][x11y30][x11y31][x11y32][x11y33][x11y34][x11y35][x11y36][x11y37][x11y38][x11y39][x11y40][x11y41][x11y42][x11y43][x11y44][x11y45][x11y46][x11y47][x11y48][x11y49]
[x12y0][x12y1][x12y2][x12y3][x12y4][x12y5][x12y6][x12y7][x12y8][x12y9][x12y10][x12y11][x12y12][x12y13][x12y14][x12y15][x12y16][x12y17][x12y18][x12y19][x12y20][x12y21][x12y22][x12y23][x12y24][x12y25][x12y26][x12y27][x12y28][x12y29][x12y30][x12y31][x12y32][x12y33][x12y34][x12y35][x12y36][x12y37][x12y38][x12y39][x12y40][x12y41][x12y42][x12y43][x12y44][x12y45][x12y46][x12y47][x12y48][x12y49]
[x13y0][x13y1][x13y2][x13y3][x13y4][x13y5][x13y6][x13y7][x13y8][x13y9][x13y10][x13y11][x13y12][x13y13][x13y14][x13y15][x13y16][x13y17][x13y18][x13y19][x13y20][x13y21][x13y22][x13y23][x13y24][x13y25][x13y26][x13y27][x13y28][x13y29][x13y30][x13y31][x13y32][x13y33][x13y34][x13y35][x13y36][x13y37][x13y38][x13y39][x13y40][x13y41][x13y42][x13y43][x13y44][x13y45][x13y46][x13y47][x13y48][x13y49]
[x14y0][x14y1][x14y2][x14y3][x14y4][x14y5][x14y6][x14y7][x14y8][x14y9][x14y10][x14y11][x14y12][x14y13][x14y14][x14y15][x14y16][x14y17][x14y18][x14y19][x14y20][x14y21][x14y22][x14y23][x14y24][x14y25][x14y26][x14y27][x14y28][x14y29][x14y30][x14y31][x14y32][x14y33][x14y34][x14y35][x14y36][x14y37][x14y38][x14y39][x14y40][x14y41][x14y42][x14y43][x14y44][x14y45][x14y46][x14y47][x14y48][x14y49]
[x15y0][x15y1][x15y2][x15y3][x15y4][x15y5][x15y6][x15y7][x15y8][x15y9][x15y10][x15y11][x15y12][x15y13][x15y14][x15y15][x15y16][x15y17][x15y18][x15y19][x15y20][x15y21][x15y22][x15y23][x15y24][x15y25][x15y26][x15y27][x15y28][x15y29][x15y30][x15y31][x15y32][x15y33][x15y34][x15y35][x15y36][x15y37][x15y38][x15y39][x15y40][x15y41][x15y42][x15y43][x15y44][x15y45][x15y46][x15y47][x15y48][x15y49]
[x16y0][x16y1][x16y2][x16y3][x16y4][x16y5][x16y6][x16y7][x16y8][x16y9][x16y10][x16y11][x16y12][x16y13][x16y14][x16y15][x16y16][x16y17][x16y18][x16y19][x16y20][x16y21][x16y22][x16y23][x16y24][x16y25][x16y26][x16y27][x16y28][x16y29][x16y30][x16y31][x16y32][x16y33][x16y34][x16y35][x16y36][x16y37][x16y38][x16y39][x16y40][x16y41][x16y42][x16y43][x16y44][x16y45][x16y46][x16y47][x16y48][x16y49]
[x17y0][x17y1][x17y2][x17y3][x17y4][x17y5][x17y6][x17y7][x17y8][x17y9][x17y10][x17y11][x17y12][x17y13][x17y14][x17y15][x17y16][x17y17][x17y18][x17y19][x17y20][x17y21][x17y22][x17y23][x17y24][x17y25][x17y26][x17y27][x17y28][x17y29][x17y30][x17y31][x17y32][x17y33][x17y34][x17y35][x17y36][x17y37][x17y38][x17y39][x17y40][x17y41][x17y42][x17y43][x17y44][x17y45][x17y46][x17y47][x17y48][x17y49]
[x18y0][x18y1][x18y2][x18y3][x18y4][x18y5][x18y6][x18y7][x18y8][x18y9][x18y10][x18y11][x18y12][x18y13][x18y14][x18y15][x18y16][x18y17][x18y18][x18y19][x18y20][x18y21][x18y22][x18y23][x18y24][x18y25][x18y26][x18y27][x18y28][x18y29][x18y30][x18y31][x18y32][x18y33][x18y34][x18y35][x18y36][x18y37][x18y38][x18y39][x18y40][x18y41][x18y42][x18y43][x18y44][x18y45][x18y46][x18y47][x18y48][x18y49]
[x19y0][x19y1][x19y2][x19y3][x19y4][x19y5][x19y6][x19y7][x19y8][x19y9][x19y10][x19y11][x19y12][x19y13][x19y14][x19y15][x19y16][x19y17][x19y18][x19y19][x19y20][x19y21][x19y22][x19y23][x19y24][x19y25][x19y26][x19y27][x19y28][x19y29][x19y30][x19y31][x19y32][x19y33][x19y34][x19y35][x19y36][x19y37][x19y38][x19y39][x19y40][x19y41][x19y42][x19y43][x19y44][x19y45][x19y46][x19y47][x19y48][x19y49]`;
var playerPos = [0, 0];
var playerState = 1;
var totalScore = [];
var score = 0;
var toReplace = "";

function update(){
	let newScreen = template;
  let no = false;
	for(var i = 0; i < screen.length; i++){
		for(var v = 0; v < screen[i].length; v++){
			newScreen = newScreen.replace(`[x${playerPos[1]}y${playerPos[0]}]`, " ".bgRed).replace(`\[x${v}y${i}\]`, String(screen[i][v]).replace(/0/g, chalk.bgHex("#FFFFFF")(" ")));
		  if(toReplace == "bk" && screen[v][i] == blueLock){screen[v][i] = 0; toReplace = "";};
      if(toReplace == "yk" && screen[v][i] == yellLock){screen[v][i] = 0; toReplace = "";};
    }
	}
	if(screen[playerPos[0]][playerPos[1]] == powerUp){
		screen[playerPos[0]][playerPos[1]] = 0;
		playerState += 1;
	}
  else if(screen[playerPos[0]][playerPos[1]] == ennemy){ //I will replace this with a switch() in an update
    screen[playerPos[0]][playerPos[1]] = 0;
    playerState -= 1;
    if(playerState == 0){gameOver(`${"Tu es mort, faute d'un".cyan} ${"point d'exclamation".red}${".".cyan}`); no = true;}
  }
  else if(screen[playerPos[0]][playerPos[1]] == water){
    playerState -= 1;
    if(playerState == 0){gameOver(`${"Tu es mort, faute de".cyan} ${"ne pas savoir nager".red}${" :)"}`); no = true;}
  }
  else if(screen[playerPos[0]][playerPos[1]] == goal){
    win();
    totalScore[currentLvl] = score;
    score = 0;
    no = true;
  }
  else if(screen[playerPos[0]][playerPos[1]] == blueKey){
    screen[playerPos[0]][playerPos[1]] = 0;
    toReplace = "bk";
  }
  else if(screen[playerPos[0]][playerPos[1]] == yellKey){
    screen[playerPos[0]][playerPos[1]] = 0;
    toReplace = "yk";
  }
  else if(screen[playerPos[0]][playerPos[1]] == euro){
    screen[playerPos[0]][playerPos[1]] = 0;
    score += 100
  }
  else if(screen[playerPos[0]][playerPos[1]] == dollar){
    screen[playerPos[0]][playerPos[1]] = 0;
    score += 10
  }
	if(!no){
    console.clear();
    console.log(newScreen);
    console.log(`${"PV: ".cyan} ${colorIf(playerState)}            ${"Niveau:".cyan} ${String(currentLvl).cyan}            ${"Score:".green} ${String(score).green}`)
  }
}

const wall = chalk.hex("#343635")("█");
const powerUp = chalk.bgHex("#FFFFFF")("@".cyan);
const ennemy = chalk.bgHex("#FFFFFF")("!".red);
const goal = chalk.bgHex("#FFFFFF")("/".green);
const water = "W".bgBlue;
const yellKey = "9".yellow;
const yellLock = "X".yellow;
const blueKey = "6".blue;
const blueLock = "X".blue;
const dollar = "$".bgGreen;
const euro = "€".bgYellow;

function init(lvl){
  if(!process.argv[2])
    screen = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
  else
    screen = require(path.join(__dirname, "niveaux", process.argv[2]))[String(lvl)];
  if(!process.argv[2])
    switch(lvl){
      case 0:
        playerPos = [0, 0];
        screen[0][1] = wall;
        screen[1][1] = wall;
        screen[2][1] = wall;
        screen[3][1] = wall;
        screen[0][2] = wall;
        screen[2][2] = dollar;
        screen[3][2] = yellLock;
        screen[0][3] = wall;
        screen[1][3] = wall;
        screen[2][3] = wall;
        screen[3][3] = wall;
        screen[5][8] = powerUp;
        screen[8][9] = ennemy;
        screen[10][10] = ennemy;
        screen[18][18] = goal;
        screen[16][5] = yellKey;
        currentLvl = 0;
      break;
      case 1:
        playerPos = [0, 0];
        for(var p = 0; p < 49; p++){
          screen[p][1] = wall;
        }
        for(var q = 0; q < 48; q++){
          screen[q+1][3] = wall;
        }
      break;
      default:
        playerPos = [0, 0];
      break;
    }
  started = true;
  update();
}

function colorIf(number){
	switch(number){
		case 1:
			return String(number).red;
		break;
		case 2:
		case 3:
			return String(number).yellow;
		break;
		case 4:
			return String(number).green;
		break;
		default:
			if(number > 4)
				return String(number).cyan;
			else
				return String(number).brown;
	};
};

if(!process.argv[2]){
    console.log(`${"Bienvenue sur".cyan} ${"Truc Rouge Aventure".red} ${"!".cyan}`);
    console.log();
    console.log(`${"Ce jeu à été fait en".cyan} ${"NodeJS".green} ${"par".cyan} ${"Positron".yellow}${", et des".cyan} ${"points-virgules".yellow}.`);
    console.log(`          ${"Appuies sur".cyan} ${"S".yellow} ${"pour commencer !".cyan}          `)
    console.log(`               ${"Ou sur".cyan} ${"Q".red} ${"pour quitter.".cyan}          `)
    console.log(`                   ${"Ou".cyan} ${"L".blue} ${"pour savoir comment charger un niveau téléchargé".cyan}`);
}
var started = false;
var currentLvl = 0;
var death = 0;
var winned = false;
var newLvl = 0;

function gameOver(text){
  score = 0;
  started = false;
  death += 1;
  newLvl = currentLvl-1;
  if(newLvl < 0){newLvl = 0;}
  console.clear();
  console.log(text);
  console.log(`${"Appuies sur".cyan} ${"S".yellow} ${"pour recommencer !".cyan}          `)
}

function win(){
  started = false;
  winned = true;
  newLvl = currentLvl+1;
  console.clear();
  console.log(`${"          Bravo !".green}\n${"Appuies sur".cyan} ${"N".green} ${"pour passer au niveau suivant !".cyan}`);
}

process.stdin.on('keypress', (key, data) => {
  if(!started){
    if(death !== 0){
        playerState = 1;
        currentLvl = newLvl;
        init(currentLvl);
    }
    if(winned && data.name == "n"){
        currentLvl = newLvl;
        init(currentLvl);
    }
    if(data.name == "s"){
        started = true;
        init(currentLvl);
        update();
    }
    else if(data.name == "l"){
        console.log(`\nPour charger un niveau, lance le jeu dans un Terminal comme ceci: ${"trucrouge <nomDuNiveau>"}\r\n Ton niveau doit être dans le dossiers niveaux.`);
    }
    else if(data.name == "q"){
        process.stdout.write("\n");
        process.exit(0);
    }
  }
  else if(data.name == "down"){
  	if(playerPos[1] < 19){
  		if(screen[playerPos[0]][playerPos[1]+1] !== wall && screen[playerPos[0]][playerPos[1]+1] !== blueLock && screen[playerPos[0]][playerPos[1]+1] !== yellLock){
        let x = [playerPos[0], playerPos[1]];
  			playerPos[1] += 1;
        score += 1;
        screen[x[0]][x[1]] = water;
  			update();
  		}
  	}
  }
  else if(data.name == "right"){
  	if(playerPos[0] < 49){
  		if(screen[playerPos[0]+1][playerPos[1]] !== wall && screen[playerPos[0]+1][playerPos[1]] !== blueLock && screen[playerPos[0]+1][playerPos[1]] !== yellLock){
        let x = [playerPos[0], playerPos[1]];
  			playerPos[0] += 1;
        score += 1;
        screen[x[0]][x[1]] = water;
  			update();
  		}
  	}
  }
  else if(data.name == "up"){
  	if(playerPos[1] > 0){
  		if(screen[playerPos[0]][playerPos[1]-1] !== wall && screen[playerPos[0]][playerPos[1]-1] !== blueLock && screen[playerPos[0]][playerPos[1]-1] !== yellLock){
        let x = [playerPos[0], playerPos[1]];
  			playerPos[1] -= 1;
        score += 1;
        screen[x[0]][x[1]] = water;
  			update();
  		}
  	}
  }
  else if(data.name == "left"){
  	if(playerPos[0] > 0){
  		if(screen[playerPos[0]-1][playerPos[1]] !== wall && screen[playerPos[0]-1][playerPos[1]] !== blueLock && screen[playerPos[0]-1][playerPos[1]] !== yellLock){
        let x = [playerPos[0], playerPos[1]];
  			playerPos[0] -= 1;
        score += 1;
        screen[x[0]][x[1]] = water;
  			update();
  		}
  	}
  }
});
