function createGreeting(greeting = "") {
  const myGreet = greeting.toUpperCase();

  return function(name) {
    return `${myGreet} ${name}`;
  };
}

const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');
console.log(sayHello('wes'));
console.log(sayHello('kait'));
console.log(sayHey('kait'));
