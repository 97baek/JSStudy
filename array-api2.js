// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits.toString());
}
// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
}
// Q3. make this array look like this: [5,4,3,2,1]
{
  const array = [1, 2, 3, 4, 5];
  array.reverse();
  console.log(array);
}
// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  array.shift();
  array.shift();
  const newArray = array;
  console.log(newArray);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
for (let i = 0; i < students.length; i++) {
  if (students[i].score === 90) {
    console.log(students[i].name);
  }
}

for (let i in students) {
  if (students[i].score === 90) {
    console.log(students[i].name);
  }
}
// Q6. make an array of enrolled students
for (let i = 0; i < students.length; i++) {
  if (students[i].enrolled === true) {
    console.log(students[i].name);
  }
}

// Q7. make an array cotaining only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const array = new Array();
  for (let i = 0; i < students.length; i++) {
    array[i] = students[i].score;
  }
  console.log(array);
}

// Q8. check if there is a student with the score lower than 50
{
  for (let i = 0; i < students.length; i++) {
    if (students[i].score <= 50) {
      console.log(students[i].name);
    }
  }
}

// Q9. compute students' average score
{
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].score;
  }
  const avg = sum / students.length;
  console.log(avg);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const array = new Array();
  for (let i = 0; i < students.length; i++) {
    array[i] = students[i].score;
  }
  console.log(array.toString());
}
