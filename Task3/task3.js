const numbers = [];
let inputNumber;
do {
  inputNumber = prompt("Enter a number (or 'done' to finish): ");
  if (inputNumber !== "done" && !isNaN(inputNumber)) {
    numbers.push(inputNumber);
  }
} while (inputNumber !== "done");

const p = document.createElement("p");
p.innerHTML = "Array entered: " + numbers.join(", ");
document.body.appendChild(p);

let count = 0;
for (number of numbers) {
  if (number % 2 == 0) {
    count++;
    const p = document.createElement("p");
    p.innerHTML = number + " is even.";
    document.body.appendChild(p);
  }
}
if (count > 0) {
  alert("All even numbers displayed on page.");
} else {
  alert("No even nunbers found in array.");
}
