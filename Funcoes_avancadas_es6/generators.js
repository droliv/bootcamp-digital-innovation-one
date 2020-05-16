// generatores
function* hello() {
  console.log('hello!');
  yield;

  console.log('world!');
  yield;
}
console.log(hello().next());
console.log(hello().next());
console.log(hello().next());
console.log(hello().next());
