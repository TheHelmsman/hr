function processData(input) {
    
	var dataArray = input.split("\n");
	
	var n = parseInt(dataArray[0]);
	var len = parseInt(dataArray[1]);
	var a = dataArray[2].split(" ");
	
	for (var i = 0; i < len; i++) {
		if(n == parseInt(a[i])) {
			console.log(i);
		}
	}
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});