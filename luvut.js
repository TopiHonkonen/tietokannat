var prompt=require("prompt-sync") ({sigint: true});

let i=parseInt(prompt("luku 1: "));
let j=parseInt(prompt("luku 2: "));
if (i>j) {
	console.log("luku 1 on suurempi");
}
else if (i<j) {
	console.log("luku 2 on suurempi");
}
else {
	console.log("yhtä suuret");
}
