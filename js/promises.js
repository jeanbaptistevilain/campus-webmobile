var delayedCall = function(delayMs, callLabel) { return new Promise(function(resolve, reject) {setTimeout(function() {console.log(callLabel); resolve();}, delayMs)}); }

var appelDistant1 = function() {return delayedCall(1000, 'appelDistant1 - Réponse après 1000ms');}
var appelLocal2 = function() {return delayedCall(0, 'appelLocal2 - Réponse instantanée');}
var appelDistant3 = function() {return delayedCall(500, 'appelDistant3 - Réponse après 500ms');}
