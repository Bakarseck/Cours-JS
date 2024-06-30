// Select Items

const body = document.body;

const number1 = document.querySelector("#number1");
const number2 = document.getElementById("number2");
const operator = document.querySelector(".op");
const button = document.querySelector("#submit");

const number1Table = document.querySelector("#number1-table");
const number2Table = document.getElementById("number2-table");
const operatorTable = document.querySelector("#op-table");
const resultTable = document.querySelector("#result-table");

const spanError1 = document.getElementById("error-number1");
const spanError2 = document.getElementById("error-number2");
const fieldSet = document.querySelector('fieldset');



// Add Event Listeners
button.addEventListener("click", () => {
  Verification(!number1.value, spanError1, "Way Bindal");
  Verification(!number2.value, spanError2, "Way Bindal");
  Verification(isNaN(number1.value), spanError1, "Saway Bindal number");
  Verification(isNaN(number2.value), spanError2, "Saway Bindal number");

  const expression = `${number1.value}${operator.value}${number2.value}`;

  // Display Value in the table
  number1Table.textContent = number1.value;
  number2Table.textContent = number2.value;
  operatorTable.textContent = operator.value;
  resultTable.textContent = eval(expression);
});

// Create Button and make textContent as Clear 
const buttone=document.createElement('button')
fieldSet.appendChild(buttone)
buttone.innerText='x';
buttone.className = 'delete';

// Add an event listener of click event and change all textContent of elements in the table to ""
buttone.addEventListener("click",()=>{
    number1.value ="";
    number2.value ="";

    number1Table.textContent = "";
    number2Table.textContent = "";
    operatorTable.textContent = "";
    resultTable.textContent = "";

})
// And setAttribute of the input as ""

function Verification(condition, element, trueValue) {
  if (condition) {
    element.textContent = trueValue;
    setTimeout(() => {
      element.textContent = "";
    }, 500);
  }
}
