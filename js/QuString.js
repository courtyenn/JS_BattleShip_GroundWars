var defaultTheme = "classic";
var queries;
var count = 0;

//do not invoke directly
function parseQueryString()
{
	if(document.location.href.indexOf("?") == -1){
		queries = new Array(10);
		return;
	}
	var x = document.location.href.split("?")[1].split("&");
	var xx;
	var result = new Array(x.length);
	
	for(i=0; i < x.length; i++)
	{
		xx = x[i].split("=");
		result[i] = new Object();
		result[i].name = xx[0];
		result[i].value = xx[1];
	}
	queries = result;
	count = queries.length;
}

//do not invoke directly
function loadStyle(){
	var theme = get("theme");
	if(theme == null){
		put("theme", defaultTheme);
		theme = defaultTheme;
	}
	
	setStyle(getStyleURL(theme));
}

//do not invoke directly
function restyle(theme){
	put("theme", theme); 
	setStyle(getStyleURL(theme));
}

//do not invoke directly
function setStyle(url){
	document.getElementById("style").setAttribute('href', url);
}

//do not invoke directly
function constructQueryString(){
	var result = "";
	
	if(count > 0){
		result = "?" + queries[0].name + "=" + queries[0].value;
		var i = 1;
		for(; i < count; i++){
			result+= "&" + queries[i].name + "=" + queries[i].value;
		}
	}
	return result;
}

//do not invoke directly
function enlarge(){
	temp = new Array(queries.length*2);
	var i;
	for(i = 0; i < queries.length; i++){
		temp[i] = queries[i];
	}
	queries = temp;
}

//do not invoke directly
function getStyleURL(style){
	if(style == "classic")return "../css/Classic.css";
	if(style == "medieval")return "../css/Medieval.css";
	if(style == "space")return "../css/Space.css";
	return "../css/Classic.css";
}

/* 
 * These functions are the only ones you need.
 */

function redirect(url){
	document.location.href = url + constructQueryString();
}

function get(name){
	var i;
	for(i = 0; i < count; i++){
		if(queries[i].name == name)return queries[i].value;
	}
	return null;
}

function put(name, value){
	var i = 0;
	for(; i < count; i++){
		var result;
		if(queries[i].name == name){
			result = queries[i].value;
			queries[i].value = value;
			return result;
		}
	}
	
	if(count == queries.length)
	enlarge();
	queries[count] = new Object();
	queries[count].name = name;
	queries[count].value = value;
	count++;
	
	return null;
}

function remove(name){
	var i;
	var result;
	for(i = 0; i < count; i++){
		if(queries[i].name == name){
			result = queries[i];
			queries[i] == null;
			var j = i+1;
			for(; j < count; i=j++){
				queries[i] = queries[j];
			}
			count--;
			return result;
		}
	}
	return null;
}

function contains(name){
	var i;
	for(i = 0; i < count; i++){
		if(queries[i].name == name)return true;
	}
	return false;
}

// document.getElementById("playername").focus();