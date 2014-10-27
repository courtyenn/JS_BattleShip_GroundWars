//urls
var baseURL = "http://dickerson.neumont.edu:8080/Battleship/GameRequest/";
var newGameURL = "NewGame";
var gameListURL = "GameList";
var joinGameURL = "Join";
var placeShipURL = "PlaceShip";
var updateURL = "Update";
var fireURL = "Fire";
var forfeitURL = "Forfeit";

//directions
var up = "UP";
var down = "DOWN";
var left = "LEFT";
var right = "RIGHT";

//ships
var carrier = "Carrier";
var battleship = "Battleship";
var submarine = "Submarine";
var cruiser = "Cruiser";
var patrol = "PatrolBoat";

//difficulty
var easy = "Robby";
var medium = "Geeves";
var hard = "Edison";

//valid game states
var waitingFor2nd = "WaitingFor2nd";
var waitingForShips = "WaitingForShips";
var inProgress = "InProgress";
var finished = "Finished";
var forfeited = "Forfeited";
var timedOut = "TimedOut";

//xml factories
function createNewGameXML(playerID){
	return "<request><playerID>" + playerID + "</playerID></request>";
}

function createNewSinglePlayerGameXML(playerID, difficulty){
	return "<request><playerID>" + playerID + "</playerID><robot>" + difficulty + "</robot></request>";
}

function createGameListXML(){
	return "<request></request>";
}

function createJoinXML(playerID, gameID){
	return "<request><playerID>" + playerID + "</playerID><gameID>" + gameID + "</gameID></request>";
}

function createPlaceShipXML(coordinates, direction, ship){
	return "<request><coordinates>" + coordinates + "</coordinates><direction>" + direction + "</direction><ship>" + ship + "</ship></request>";
}

function createUpdateXML(){
	return "<request></request>";
}

function createFireXML(coordinates){
	return "<request><coordinates>" + coordinates + "</coordinates></request>";
}

function createForfeitXML(){
	return "<request></request>";
}

function send(url, xml, callback){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.withCredentials = true;
	xmlhttp.open("POST", baseURL + url, true);
	xmlhttp.onreadystatechange = function(){if(xmlhttp.readyState==4){callback(xmlhttp);}}
	xmlhttp.send(xml);
}

function save(gameID){
	release();
	document.cookie = "gameID=" + gameID;
	
}

function release(){
	document.cookie = null;
}

function getElements(xmlhttp, tagname){
	return xmlhttp.responseXML.documentElement.getElementsByTagName(tagname);
}

