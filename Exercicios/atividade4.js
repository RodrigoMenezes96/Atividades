function maiorOuIgual(primeiro, segundo) {
  if(typeof primeiro != typeof segundo) return false;
  return primeiro >= segundo;
 }
console.log(maiorOuIgual(5, 0));
console.log(maiorOuIgual(8, 100));
console.log(maiorOuIgual(0, 0));