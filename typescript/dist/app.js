// Declaração de variáveis
var message = "Help me, Obi-Wan Kenobi. You're my only hope!";
console.log(message);
var episode = 4;
console.log('This is episode ' + 4);
episode = episode + 1;
console.log('Next episode is ' + episode);
var favoriteDroid;
favoriteDroid = 'BB-8';
console.log('My favorite droid is ' + favoriteDroid);
// Array
var films;
films = ['Ameaça Fantasma', ' Ataque dos Clones', ' O Retorno de Jedi'];
console.log('Trilogia Star Wars: ' + films);
// Functions TS
// parsecs: number é o tipo do parâmetro
// boolean é o tipo do retorno
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
// `` => template string
console.log("Is " + distance + " parsecs enhough to beat Millenium Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
// O parâmetro passado tem que ser uma string
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5, 1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
