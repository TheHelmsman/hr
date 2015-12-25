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

/**
* calculates sum of numbers in array from left upper diagonal to 
* right rottom diagonal
*/
function calcDiagonal(a, n) {
	var sum = 0;
    for (var i=0; i< n; i++) {
		for (var j=0; j< n; j++) {
			if(i == j) {
				sum += parseInt(a[i][j]);
			}
		}
	}
    return sum;
}

/**
* rotate an array 90 degrees clockwise
*/
function rotateArray(a, n) {
    //printArray(a);
	var ar = [];
    for(var i=0; i< n; i++) {
        ar.push([]);
    }
    for(i=0; i< n; i++) {
        for(j=0; j< n; j++) {
            var row = n-j-1;
            var col = i;
            ar[i][j] = parseInt(a[row][col]);
        }
    }
	return ar;
}

/**
* prints an array for debug purposes to console
*/
function printArray(a) {
    console.log("printing array...");
    for (var i=0; i< a.length; i++) {
        console.log(a[i]);
    }
}

/**
* calculate difference between two numbers same as Math.abs 
* (for some reason Math.abs doesn't work on hackerranked)
*/
function diff(num1, num2) {
  return (num1 > num2) ? num1-num2 : num2-num1
}

function main() {
    
	var n = parseInt(readLine());
    var a = [];
	
	for(a_i = 0; a_i < n; a_i++) {
       a[a_i] = readLine().split(' ');
    }
	
	var ar = rotateArray(a, n);
	var sum1 = calcDiagonal(a, n);
	var sum2 = calcDiagonal(ar, n);
	var res = diff(sum1,sum2);
	console.log(res);
    return res;
}
