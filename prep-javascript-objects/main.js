var person = {
  firstName: 'Walter',
  lastName: 'Victor',
  hobby: 'Origami Making'
}
;
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Pharmacist';
console.log("The persons's current job is:", person.job);

person.previousjob = 'Singer';
console.log("This person's previous job is:", person.previousjob);

console.log('This complete person object:', person);
