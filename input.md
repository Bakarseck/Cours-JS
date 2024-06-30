# Introduction à la Gestion des Valeurs des Entrées en JavaScript

Bienvenue dans ce guide sur la gestion des valeurs des entrées (`input values`) et des événements liés aux formulaires en JavaScript. Ce guide vous expliquera comment manipuler les entrées utilisateur dans les formulaires web, y compris la récupération et la modification des valeurs des champs de formulaire.

## Table des Matières

1. [Introduction](#introduction)
2. [Récupérer la Valeur d'une Entrée](#récupérer-la-valeur-dune-entrée)
3. [Modifier la Valeur d'une Entrée](#modifier-la-valeur-dune-entrée)
4. [Événements Liés aux Formulaires](#événements-liés-aux-formulaires)
5. [Validation de Formulaire](#validation-de-formulaire)
6. [Exemples Pratiques](#exemples-pratiques)
7. [Conclusion](#conclusion)

## Introduction

Les formulaires sont essentiels pour interagir avec les utilisateurs sur le web. En JavaScript, nous pouvons facilement récupérer et manipuler les valeurs des champs de formulaire, ainsi que gérer divers événements de formulaire pour offrir une expérience utilisateur dynamique.

## Récupérer la Valeur d'une Entrée

Pour récupérer la valeur d'une entrée, nous devons d'abord sélectionner l'élément HTML correspondant, puis accéder à sa propriété `value`.

### Exemple

HTML:

```html
<input type="text" id="username" value="JohnDoe">
<button onclick="getInputValue()">Get Value</button>
```

JavaScript:

```javascript
function getInputValue() {
  let inputElement = document.getElementById('username');
  let inputValue = inputElement.value;
  console.log(inputValue); // Affiche: JohnDoe
}
```

## Modifier la Valeur d'une Entrée

Nous pouvons également modifier la valeur d'une entrée en accédant à la propriété `value` et en lui assignant une nouvelle valeur.

### Exemple

HTML:

```html
<input type="text" id="username" value="JohnDoe">
<button onclick="setInputValue()">Set Value</button>
```

JavaScript:

```javascript
function setInputValue() {
  let inputElement = document.getElementById('username');
  inputElement.value = 'JaneDoe';
}
```

## Événements Liés aux Formulaires

Les événements de formulaire en JavaScript nous permettent de détecter et de réagir aux interactions utilisateur.

### `change`

Se déclenche lorsque la valeur d'un élément a changé.

```javascript
document.getElementById('username').addEventListener('change', function() {
  console.log('Value changed to: ' + this.value);
});
```

### `input`

Se déclenche chaque fois que la valeur d'un élément change (plus réactif que `change`).

```javascript
document.getElementById('username').addEventListener('input', function() {
  console.log('Current value: ' + this.value);
});
```

### `submit`

Se déclenche lorsque le formulaire est soumis.

HTML:

```html
<form id="userForm" onsubmit="handleSubmit(event)">
  <input type="text" id="username">
  <button type="submit">Submit</button>
</form>
```

JavaScript:

```javascript
function handleSubmit(event) {
  event.preventDefault(); // Empêche la soumission par défaut du formulaire
  let username = document.getElementById('username').value;
  console.log('Form submitted with username: ' + username);
}
```

## Validation de Formulaire

La validation de formulaire assure que les utilisateurs fournissent des données appropriées avant de soumettre le formulaire.

### Exemple de Validation

HTML:

```html
<form id="registrationForm" onsubmit="validateForm(event)">
  <input type="text" id="email" placeholder="Enter your email">
  <button type="submit">Register</button>
</form>
<p id="error-message" style="color: red;"></p>
```

JavaScript:

```javascript
function validateForm(event) {
  event.preventDefault();
  let email = document.getElementById('email').value;
  let errorMessage = document.getElementById('error-message');

  if (!email.includes('@')) {
    errorMessage.textContent = 'Please enter a valid email address.';
  } else {
    errorMessage.textContent = '';
    console.log('Form submitted with email: ' + email);
    // Soumettre le formulaire ou effectuer d'autres actions
  }
}
```

## Exemples Pratiques

### Exemple 1: Champ de Recherche en Temps Réel

HTML:

```html
<input type="text" id="search" placeholder="Search...">
<ul id="results"></ul>
```

JavaScript:

```javascript
let items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

document.getElementById('search').addEventListener('input', function() {
  let query = this.value.toLowerCase();
  let results = items.filter(item => item.toLowerCase().includes(query));
  displayResults(results);
});

function displayResults(results) {
  let resultsList = document.getElementById('results');
  resultsList.innerHTML = '';
  results.forEach(result => {
    let li = document.createElement('li');
    li.textContent = result;
    resultsList.appendChild(li);
  });
}
```

### Exemple 2: Formulaire de Contact

HTML:

```html
<form id="contactForm" onsubmit="submitContactForm(event)">
  <input type="text" id="name" placeholder="Your Name">
  <input type="email" id="email" placeholder="Your Email">
  <textarea id="message" placeholder="Your Message"></textarea>
  <button type="submit">Send</button>
</form>
<p id="form-message" style="color: green;"></p>
```

JavaScript:

```javascript
function submitContactForm(event) {
  event.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  let formMessage = document.getElementById('form-message');

  if (name && email && message) {
    formMessage.textContent = 'Thank you for your message!';
    // Soumettre les données du formulaire ou effectuer d'autres actions
  } else {
    formMessage.textContent = 'Please fill out all fields.';
    formMessage.style.color = 'red';
  }
}
```

## Conclusion

La gestion des valeurs des entrées et des événements liés aux formulaires est essentielle pour créer des applications web interactives et dynamiques. En utilisant les techniques présentées dans ce guide, vous pouvez facilement manipuler les données des utilisateurs et offrir une expérience utilisateur enrichissante. N'hésitez pas à expérimenter et à adapter ces exemples à vos propres besoins.
