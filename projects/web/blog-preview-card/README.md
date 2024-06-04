# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![](/projects/web/blog-preview-card/design/active-states.jpg)

### Links

- Solution URL: [Repo](https://github.com/Obi-Juan-Kenobee/Obi-Juan-Kenobee.github.io/tree/main/projects/web/blog-preview-card)
- Live Site URL: [Live Site](obi-juan-kenobee.github.io/projects/web/blog-preview-card/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow and responsive design

### What I learned

I learned about box-shadows. The first two inputs are for the x and y axis of the shadow and the third is the blur effect and the last is the color of the shadow. Positive numbers will move the shadow to the right and down of the element, while negative numbers will move the shadow to the left and up. For the blur the smaller the number the less the blur.

It was also my first time learning about transitions. Transitions are used to animate changes in CSS properties. I had to figure out how to apply the transition I wanted, after some research, I found that the `transition` property can be used to set the duration and timing function of the transition. 
But, after figuring that out, I applied it to the :hover pseudo-class. It did not work as I wanted.
So, after some more research, I learned that you have to apply it to the element itself, and then the changes that want to take place should be placed in pseudo-selectors/classes.

See MDN documentation [Transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)


```css
button {
  background-color: hsl(47, 88%, 63%);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-family: inherit;
  font-weight: 800;
  margin: 4px 2px;
  cursor: pointer;
  transition: all 0.5s ease-out;
}

button:hover, button:focus, button:active {
  background-color: hsl(47, 88%, 78%);
  box-shadow: 8px 8px 1px black;
}

.Published {
  color: hsl(0, 0%, 50%);
  font-size: 12px;
  margin: 8px 0 15px 5px;
}

h1 {
  margin: 0 0 20px 0;
  font-size: 1.5rem;
  font-weight: 800;
}

h1 a {
  text-decoration: none;
  color: black;
   transition: all 0.5s ease-out;
}

h1 a:hover, h1 a:focus, h1 a:active {
  color: hsl(47, 88%, 63%);
  text-shadow: 3px 3px 3px black;
  cursor: pointer;
}
```

### Continued development

Will expand my knowledge in transitions. It seems like you can target elements themselves within the transition property to change styles with a transition.

### Useful resources

- [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

## Author

- Website - [John Martz](https://obi-juan-kenobee.github.io/)
- Github - [Repos](https://github.com/obi-juan-kenobee)
- LinkedIn - [Connect!](https://www.linkedin.com/in/obi-juan-kenobi/)


## Acknowledgments

- Assets by Frontend Mentor.
- MDN documentation.
