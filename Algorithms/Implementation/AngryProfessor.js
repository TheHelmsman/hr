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
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        a = readLine().split(' ');
        var onTimeAmount = 0;
        var lateAmount = 0;
        a = a.map(function(value) {
            if(value <= 0) {
                onTimeAmount++;
            } else {
                lateAmount++;
            }
        });
        //console.log("onTimeAmount: "+onTimeAmount+" minToStartClass: "+k);
        if(onTimeAmount >= k) {
            console.log("NO");  //  class cancelled?
        } else {
            console.log("YES"); //  class cancelled?
        }
    }

}
