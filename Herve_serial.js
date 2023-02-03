// set up inlets/outlets/assist strings
inlets = 1;
outlets = 2;
setinletassist(0,"characters (symbol)");
setoutletassist(0,"mugic data (string)");
setoutletassist(1,"diagnostic output (string)");

var current = new Array();
var diag = new Array();
var vpattern = "^mugicdata";
var vmodifier = "i";
var vregexp = new RegExp(vpattern,vmodifier);
var maxdiag = 5;

function loadbang() {
	current = new Array();
}

function filter(s) {
	post("Applying filter ", s, "\n");
	vpattern = s;
	vregexp = new RegExp(vpattern,vmodifier);
}

function modifier(s) {
	post("Applying modifier ", s, "\n");
	vmodifier = s;
	vregexp = new RegExp(vpattern,vmodifier);
}

function lines(n) {
	maxdiag = parseInt(n);
	post("Applying maxdiag ", n, "resulting in ", maxdiag, "\n");
}


function bang() {
    var s = current.join("");
	var r = vregexp.exec(s);
	if (r) {
		outlet(0, s.substring(vpattern.length)); 
	} else {
		diag.push(s);
		if (diag.length > maxdiag) diag.shift()
		outlet(1, diag.join("\n"));
	}
	current = [];
}


function msg_int() {
    current.push(String.fromCharCode(arguments[0]));
}
