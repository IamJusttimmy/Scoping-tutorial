'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //Creating NEW variable with same name as outer scope's variable
      const firstName = 'Mick';

      //Reassigning outer scope's variable
      output = 'NEW OUTPUT';
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Timmy';
calcAge(2002);
//console.log(age);
//printAge();


*/

/*
//This Keyword for regular function and arrow function

// var firstName = 'Micheal';

const timmy = {
  firstName: 'Timmy',
  year: 2002,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this;
    // const isGenZ = function () {
    //   vonsole.log(self);
    //   console.log(self.year >= 1998 && self.year <= 2007);
    // };

    // Solution 2
    const isGenZ = () => {
      vonsole.log(this);
      console.log(this.year >= 1998 && this.year <= 2007);
    };
    isGenZ();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
timmy.greet();
timmy.calcAge();

const addExpr = function (a, b) {
  return a + b;
};
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  caonsole.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
*/
