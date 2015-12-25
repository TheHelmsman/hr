process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var time = readLine();
	var clockFormat = time.substring(time.length-2, time.length);
	var timeArray = time.substring(0, time.length-2).split(":");
	if(clockFormat == "PM") {
		if(parseInt(timeArray[0]) != 12) {
			timeArray[0] = parseInt(timeArray[0]) + 12;
		}
	} else {
		if(parseInt(timeArray[0]) == 12) {
			timeArray[0] = "00";
		}
	}
	var timeStr = "";
	for(var i = 0; i < timeArray.length; i++) {
		if(i == timeArray.length-1) {
			timeStr += timeArray[i];
		} else {
			timeStr += timeArray[i]+":";
		}
	}
	console.log(timeStr);
}