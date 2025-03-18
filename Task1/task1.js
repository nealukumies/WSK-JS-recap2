const fruits = ["apple", "banana", "orange", " grape", "kiwi"];
console.log("Fruits array:");
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit: ${fruits[i]}`);
}
console.log(`Length of fruits array: ${fruits.length}`);
console.log(`Fruit at index 2: ${fruits[2]}`);
console.log(`Fruit at final index: ${fruits[fruits.length - 1]}`);

const vegetables = [];

for (let i = 1; i <= 3; i++) {
  const vegetable = prompt("Enter vegetable: ");
  vegetables.push(vegetable);
}

console.log("Vegetables array:");
for (let i = 0; i < vegetables.length; i++) {
  console.log(`Vegetable: ${vegetables[i]}`);
}
console.log(`Length of vegetables array: ${vegetables.length}`);
