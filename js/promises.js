var delayedCall = function(delayMs, callLabel) { return new Promise(function(resolve, reject) {setTimeout(function() {console.log('test'); resolve();}, delayMs)}); }

var appelDistant1 = function() {return delayedCall(1000, 'appelDistant1');}
var appelLocal2 = function() {return delayedCall(0, 'appelLocal2');}
var appelDistant3 = function() {return delayedCall(500, 'appelDistant3');}
