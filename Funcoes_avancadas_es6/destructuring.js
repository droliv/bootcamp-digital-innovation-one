let arr = ['apple', 'banana', 'orange'];

// destructuring assignment
let person = {
    name: 'Daniele',
    props: {
        age: 33
    }
}
let { name } = person;
let { props: { age }} = person
console.log(name)
console.log(age);

