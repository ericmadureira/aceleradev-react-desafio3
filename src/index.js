'use strict'

const fibonacci = () => {
  let fibo = [0, 1];
  let count = 0;

  while(count <= 350){
    count = fibo[fibo.length-1] + fibo[fibo.length-2]
    fibo.push(count);
  };

  return fibo;
};

const isFibonnaci = num => fibonacci().includes(num);

module.exports = {
  fibonacci,
  isFibonnaci
}
