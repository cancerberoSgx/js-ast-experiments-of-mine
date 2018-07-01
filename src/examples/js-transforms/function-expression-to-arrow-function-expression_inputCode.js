var a1 = function(a, b) {
	return a + b;
}
var b1 = function(a, b) {
 	var c = 0;
  	return a + b + c;
}
var a2 = function(a, b) {
 	return a + b + this.c;
}
var a2 = (a, b) => a + b
var b3 = (a, b) => {
 	var c = 0;
  	return a + b + c;
}
var a3 = function(a, b) {
 	return a + b + this.c;
}