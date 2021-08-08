function foo() {
  let x = 10;

  function bar() {
    let y = 10;
    console.log(myName); // baek
    console.log(x);
  }

  if (x === 10) {
    let x = 100;

    console.log(x); // 100
  }

  bar();
}

foo();
