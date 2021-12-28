// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Sharmin', 'Akter');
console.log(person1.greeting());


// Customer constructor 
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make Customer.prototype return constructor()
Customer.prototype.constructor = Customer;

// customer greeting
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName} Welcome to our Company`;
}

// Create customer
const customer1 = new Customer('jara', 'tasnim', '0177777....', 'Standard');

console.log(customer1);
console.log(customer1.greeting());



  
