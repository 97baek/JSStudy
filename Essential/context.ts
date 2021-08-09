const person = {
  name: 'Baek sangheun',
  age: 25,
  getAge() {
    return this.age;
  },
};

person.age;
person.getAge();

const age = person.getAge;
age();
