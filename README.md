# Introduction à JavaScript

Bienvenue dans ce cours de base sur JavaScript. Ce cours couvre les concepts fondamentaux du langage JavaScript, un langage de programmation utilisé principalement pour ajouter des fonctionnalités dynamiques aux pages web.

## Table des Matières

1. [Introduction](#introduction)
2. [Variables](#variables)
3. [Types de Données](#types-de-données)
4. [Opérations Arithmétiques](#opérations-arithmétiques)
5. [Conditions](#conditions)
6. [Boucles](#boucles)
7. [Fonctions](#fonctions)
8. [Conclusion](#conclusion)

## Introduction

JavaScript est un langage de programmation interprété, principalement utilisé pour ajouter des fonctionnalités dynamiques aux pages web.

## Variables

En JavaScript, on peut déclarer des variables en utilisant `var`, `let`, ou `const`.

```javascript
var x = 5; // Utilisation de var
let y = 10; // Utilisation de let
const z = 15; // Utilisation de const
```

Formule:
```
let variable_name = value;
```

## Types de Données

JavaScript prend en charge plusieurs types de données primitifs :

- Number
- String
- Boolean
- Null
- Undefined
- Object

```javascript
let number = 42; // Number
let name = "John"; // String
let isActive = true; // Boolean
let emptyValue = null; // Null
let notAssigned; // Undefined
let person = {firstName: "John", lastName: "Doe"}; // Object
```

Formule:
```
Number: x = 42
String: x = "Hello"
Boolean: x = true
Null: x = null
Undefined: x
Object: x = { key: value }
```

## Opérations Arithmétiques

JavaScript prend en charge les opérations arithmétiques de base :

- Addition : `+`
- Soustraction : `-`
- Multiplication : `*`
- Division : `/`
- Modulo : `%`

```javascript
let a = 10;
let b = 5;

let sum = a + b; // 15
let difference = a - b; // 5
let product = a * b; // 50
let quotient = a / b; // 2
let remainder = a % b; // 0
```

Formule:
```
Addition: a + b
Soustraction: a - b
Multiplication: a * b
Division: a / b
Modulo: a % b
```

## Conditions

Les conditions en JavaScript permettent d'exécuter du code en fonction de certaines conditions.

```javascript
let age = 18;

if (age < 18) {
  console.log("Mineur");
} else if (age === 18) {
  console.log("Juste majeur");
} else {
  console.log("Majeur");
}
```

Formule:
```
if (condition) {
  code
} else if (condition) {
  code
} else {
  code
}
```

## Boucles

Les boucles permettent d'exécuter un morceau de code plusieurs fois.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

Formule:
```
for (initialisation; condition; incrément) {
  code
}

while (condition) {
  code
}

do {
  code
} while (condition)
```

## Fonctions

Les fonctions sont des blocs de code conçus pour effectuer une tâche spécifique.

```javascript
function add(a, b) {
  return a + b;
}

let result = add(5, 3); // 8
```

Formule:
```
function functionName(parameters) {
  code
}
```

## Conclusion

Ce sont les bases de JavaScript. En pratiquant et en construisant des projets, vous pourrez approfondir vos connaissances et maîtriser ce langage. N'hésitez pas à expérimenter et à explorer davantage les fonctionnalités avancées de JavaScript.
