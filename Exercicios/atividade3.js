function somaPares(x){
    let soma = 0;
    for(let i = 0; i <= x; i+=2){
      soma += i;
    }
    return soma;
  }
console.log(somaPares(50));
console.log(somaPares(100));