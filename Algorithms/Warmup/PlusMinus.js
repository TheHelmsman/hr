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

function calculateResult(a) {
	
	var totalNums = a.length;
	var positiveNums = 0;
	var negativeNums = 0;
	var nullNums = 0;
	
	for(var i=0; i< totalNums; i++) {
		var num = parseInt(a[i]);
		if(num == 0) {
			nullNums++;
		} else if(num > 0) {
			positiveNums++;
		} else {
			negativeNums++;
		}
	}
	console.log(calcFraction(positiveNums, totalNums));
	console.log(calcFraction(negativeNums, totalNums));
	console.log(calcFraction(nullNums, totalNums));
}

function calcFraction(num, total) {
	var res = num / total;
	return res;
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    //arr = arr.map(Number);
	calculateResult(arr);
}
