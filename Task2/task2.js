const numbers = [];

for (let i = 1; i <= 5; i++) {
  number = prompt("Enter number:");
  numbers.push(number);
}

const p = document.createElement("p");
p.innerHTML = numbers.join(", ");
document.body.appendChild(p);

const input = prompt("Enter a number to search: ");

if (numbers.includes(input)) {
  alert("Number " + input + " is in array!");
} else {
  alert("Number " + input + " is not in array!");
}
numbers.pop();
const p2 = document.createElement("p");
p2.innerHTML = "Updated numbers array: " + numbers.join(", ");
document.body.appendChild(p2);

numbers.sort();
const p3 = document.createElement("p");
p3.innerHTML = "Sorted array: " + numbers.join(", ");
document.body.appendChild(p3);
