# Introduction au DOM (Document Object Model) en JavaScript

Bienvenue dans ce guide sur le DOM en JavaScript. Ce guide vous fournira une compréhension de base du DOM et de la manière dont il est utilisé pour interagir avec les pages web.

## Table des Matières

1. [Qu'est-ce que le DOM ?](#quest-ce-que-le-dom)
2. [Structure du DOM](#structure-du-dom)
3. [Accéder au DOM](#accéder-au-dom)
4. [Manipuler le DOM](#manipuler-le-dom)
5. [Conclusion](#conclusion)

## Qu'est-ce que le DOM ?

Le Document Object Model (DOM) est une interface de programmation pour les documents HTML et XML. Il représente la page web sous forme d'un arbre de nœuds, où chaque nœud est un objet représentant une partie du document.

### Points clés :

- **Document** : La page web elle-même.
- **Object** : Chaque partie du document est un objet, comme des éléments HTML, des attributs, du texte, etc.
- **Model** : Une représentation de la structure du document.

Le DOM permet aux langages de programmation (comme JavaScript) de manipuler la structure, le style et le contenu des documents.

## Structure du DOM

La structure du DOM est hiérarchique, ce qui signifie qu'il est organisé sous forme d'arbre avec des parents et des enfants.

### Exemple d'arbre DOM :

```html
<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>
  <h1>Mon Titre</h1>
  <p>Paragraphe de texte.</p>
</body>
</html>
```

Cet exemple HTML peut être représenté sous forme d'arbre DOM comme suit :

- `document`
  - `html`
    - `head`
      - `title`
    - `body`
      - `h1`
      - `p`

## Accéder au DOM

En JavaScript, vous pouvez accéder et manipuler le DOM en utilisant l'objet `document`.

### Sélectionner des Éléments

#### Par ID :

```javascript
const element = document.getElementById('myId');
```

#### Par Classe :

```javascript
const elements = document.getElementsByClassName('myClass');
```

#### Par Balise :

```javascript
const elements = document.getElementsByTagName('div');
```

#### Par Sélecteur CSS :

```javascript
const element = document.querySelector('.myClass');
const elements = document.querySelectorAll('.myClass');
```

## Manipuler le DOM

### Modifier le Contenu

#### `textContent`

Modifie le texte d'un élément.

```javascript
const element = document.getElementById('myElement');
element.textContent = 'Nouveau contenu texte';
```

#### `innerHTML`

Modifie le HTML intérieur d'un élément.

```javascript
const element = document.getElementById('myElement');
element.innerHTML = '<strong>Nouveau contenu HTML</strong>';
```

### Modifier les Styles

#### `style`

Modifie les styles CSS en ligne d'un élément.

```javascript
const element = document.getElementById('myElement');
element.style.color = 'blue';
element.style.fontSize = '20px';
```

### Manipuler les Classes CSS

#### `classList`

Ajoute, supprime ou vérifie des classes CSS.

```javascript
const element = document.getElementById('myElement');

// Ajouter une classe
element.classList.add('nouvelleClasse');

// Supprimer une classe
element.classList.remove('ancienneClasse');

// Vérifier si une classe existe
if (element.classList.contains('maClasse')) {
  console.log('L\'élément a la classe maClasse');
}

// Toggle une classe
element.classList.toggle('active');
```

### Écouteurs d'Événements

Ajoute un écouteur d'événement à un élément pour réagir à des interactions utilisateur.

```javascript
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  alert('Bouton cliqué!');
});
```

### Créer et Ajouter des Éléments

#### `createElement`

Crée un nouvel élément HTML.

```javascript
const newElement = document.createElement('div');
newElement.textContent = 'Je suis un nouvel élément';
```

#### `appendChild`

Ajoute un nouvel élément en tant qu'enfant d'un élément existant.

```javascript
const parentElement = document.getElementById('parent');
parentElement.appendChild(newElement);
```

## Conclusion

Le DOM est une interface essentielle pour interagir avec les pages web en JavaScript. En comprenant comment accéder et manipuler le DOM, vous pouvez créer des applications web interactives et dynamiques. Ce guide couvre les bases, mais il y a beaucoup plus à explorer. N'hésitez pas à expérimenter et à approfondir vos connaissances sur le DOM.
