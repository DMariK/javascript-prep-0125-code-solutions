const person = {
  firstName: 'Demari',
  lastName: 'Keels',
  hobby: 'Gaming',
};

const fullName = person.firstName + ' ' + person.lastName;

console.log("The person's name is: ", fullName + ' ');

person.job = "Sale's Associate";

console.log("The person's current job is: ", person.job + ' ');

person['previousJob'] = 'cashier';

console.log("The person's previous job is: " + person['previousJob']);

console.log('The complete person object: ', person);
