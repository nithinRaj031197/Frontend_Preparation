function calc() {
  let res = 0;

  return {
    add(addVal) {
      res += addVal;
      // console.log("this", this);
      return this;
    },
    subtrac(subVal) {
      res -= subVal;
      return this;
    },
    multiply(multiplyVal) {
      res *= multiplyVal;
      return this;
    },
    divide(divideVal) {
      res /= divideVal;
      return this;
    },
    getResult() {
      return res;
    },
  };
}

console.log(calc().add(10).divide(2).getResult());

// const user = {
//   name: "Nithgin",
//   age: 34,
//   getName() {
//     return this.name;
//   },
// };

// console.log(user.getName());
