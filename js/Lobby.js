var refreshDelay = 500;

function createJoinDiv(playername, gameid){
	return '<div class="gamePanel">' + playername + ', ' + gameid + "    "+'<button type="button" onClick="joinGame('   
							+ gameid + ');" value="Join">Join Game</button></div><br>';
}

function joinGame(gameid){
	send(joinGameURL, createJoinXML(get("playername"), gameid), joinGameCallback);
}

function joinGameCallback(xmlhttp){
	if(xmlhttp.status==200){
		var results = getElements(xmlhttp, "gameID");
		if(results.length > 0){
			save(results[0].childNodes[0].nodeValue);
			redirect("BattleShip.html");
		}else{
			console.log(xmlhttp);
		}
	}else{
		console.log("something went wrong");
	}
}

function createGame(){
	send(newGameURL, createNewGameXML(get("playername")), createGameCallback);
}

function createGameCallback(xmlhttp){
	if(xmlhttp.status==200){
		save(getElements(xmlhttp, "gameID")[0].childNodes[0].nodeValue);
		redirect("BattleShip.html");
	}else{
		console.log("something went wrong");
	}
}

function createSinglePlayer(difficulty){
	send(newGameURL, createNewSinglePlayerGameXML((get("playername")), difficulty), createSinglePlayerCallback);
}

function createSinglePlayerCallback(xmlhttp){
	console.log(xmlhttp);
	if(xmlhttp.status==200){
		results = getElements(xmlhttp, "gameID");
		if(results.length > 0){
			save(results[0].childNodes[0].nodeValue);
			redirect("BattleShip.html");
		}else{
			console.log("somethin went wrong");
		}
	}else{
		console.log("something went wrong");
	}
}

function refresh(){
	send(gameListURL, createGameListXML(), refreshCallback);
}

function refreshCallback(xmlhttp){
	if(xmlhttp.status==200){
		var gameListString = "";
		var games = getElements(xmlhttp, "game");
		var i;
		for(i = 0; i < games.length; i++){
			gameListString+= createJoinDiv(
				games[i].getElementsByTagName("turn")[0].childNodes[0].nodeValue,
				games[i].getElementsByTagName("gameID")[0].childNodes[0].nodeValue
			);
		}
		
		document.getElementById("games").innerHTML = gameListString;
	}else{
		console.log("something is wrong");
	}
}