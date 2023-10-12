function calc() {
  let result = 0;

  const calculator = {
    add(a) {
      result += a;

      return this;
    },
    subtract(sub) {
      result -= sub;

      return this;
    },
    multiply(m) {
      result *= m;

      return this;
    },
    divide(d) {
      result /= d;

      return this;
    },
    getResult() {
      return result;
    },
  };
  console.log(calculator);
  return calculator;
}

calc().add(4);
const res = calc().add(10).subtract(5).multiply(20).divide(2).getResult();

/**
 
    react hooks
    dsa
    Js
    

 */
