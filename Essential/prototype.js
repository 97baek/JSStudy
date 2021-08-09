const c1 = {
  name: 'C1',
  color: 'red',
};

const c2 = {
  name: 'C2',
  width: 300,
};

const c3 = {
  name: 'C3',
  height: 100,
};

c1.__proto__ = c2;

console.log(c1);
console.log(c2);
console.log(c3);

console.log(c1.width);

function Person(name) {
  this.name = name;
  this.currentId = 0;
}

Person.prototype.job = 'Developer';
Person.prototype.getNewId = function () {
  this.currentId++;
  return this.currentId;
};

Person.createItem = function (name, price) {
  return {
    name,
    price,
  };
};

const baek = new Person('Baek sangheun');
// console.log(Person);
console.log(baek);
// console.log(baek.job);
// console.log(baek.getNewId());
console.log(Person.createItem('baek', '14400'));
