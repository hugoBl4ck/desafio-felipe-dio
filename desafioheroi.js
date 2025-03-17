let nomeDoHeroi;
let lvl;
let xp;

nomeDoHeroi = "Hugo";
lvl = 5200;

if (lvl < 1000) {
  xp = "Ferro";
}
else if (lvl >= 1001 && lvl <= 2000) {

  xp = "Bronze";
}
else if (lvl >= 2001 && lvl <= 5000) {

  xp = "Prata";
}
else if (lvl >= 5001 && lvl <= 7000) {

  xp = "Ouro";
}
else if (lvl >= 7001 && lvl <= 8000) {

  xp = "Platina";
}
else if (lvl >= 8001 && lvl <= 9000) {

  xp = "Ascendente";
}
else if (lvl >= 9001 && lvl <= 10000) {

  xp = "Imortal";
}
else { 
  xp = "Radiante";
}

console.log ("O Herói de nome: " + nomeDoHeroi + " está no nível de " + xp);



