const prompt=require("prompt-sync")({sigint: true});

let str=prompt("kirjoita sana: ");

if (str == str.split("").reverse().join("")) {
	console.log("sana on palindromi");
}
else {
	console.log("sana ei ole palindromi");
}
