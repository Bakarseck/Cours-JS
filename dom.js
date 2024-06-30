const body = document.body;

// Create a new element
const input1 = document.createElement("input");
body.appendChild(input1);

// Create a submit button
const button = document.createElement("button");
body.appendChild(button);

button.innerText = 'Submit';

button.style.marginLeft = '10px';

button.addEventListener('click', handleClick);

function handleClick() {
  console.log(input1.value);
}
