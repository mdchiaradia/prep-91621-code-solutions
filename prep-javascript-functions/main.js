function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(4);
console.log('convertHoursToMinutes Exercise:', minutes);

function getGreeting(name) {
  return name + '!';
}

var greeting = getGreeting('Hello World');
console.log('getGreeting Exercise:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var calculation = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise:', calculation);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}

var calculation2 = multiplyAndDivideBy5(10, 5);
console.log('multiplyAndDivideBy5 Exercise:', calculation2);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var calculation3 = subtractTwoNumbers(10, 5);
console.log('subtractTwoNumbers Exercise:', calculation3);

function getCircleCircumference(radius) {
  return 2 * radius * 3.14;
}

var radius = getCircleCircumference(5);
console.log('getCircleCircumference Exercise:', radius);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullname = getFullName('Marcio', 'Chiaradia');
console.log('getFullName Exercise:', fullname);

function cube(number) {
  return (number ** 3);
}

var cubenumber = cube(5);
console.log('cube Exercise:', cubenumber);
