var names = ['hello', 23, 'john', 'Peter'];

names.forEach(function (name) {console.log(name);});

names.forEach((name) => {console.log(name);});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Elmonds'));

var person = {
  name: 'Andrew',
  greet: function() {
    names.forEach((name) => {
      console.log(this.name + ' random text ' + name)
    });
  }
};
person.greet();


function add (a, b) {
  return a + b;
}
console.log(add(9, 5));

//addStatement
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(4 , 7));

//addExpression
var addExpression = (a, b) => a + b;
console.log(addExpression(1, 3));
