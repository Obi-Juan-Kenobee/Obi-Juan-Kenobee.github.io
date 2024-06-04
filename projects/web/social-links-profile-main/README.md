# Frontend Mentor - Social links profile solution

This is a solution to the [Social links profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge
From Frontend Mentor:

Your challenge is to build out this social links profile and get it looking as close to the design as possible.

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![](/design/active-states.jpg)

### Links

- Solution URL: [Repo](https://your-solution-url.com)
- Live Site URL: [Live Site](https://your-live-site-url.com)

## My process


### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- Mobile-first workflow, responsive design


### What I learned

To always include :focus styles for accessibility, recommending use of the [CSS :focus-visible pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible).

```css
 button {
      background-color: hsl(0, 0%, 20%);
      height: 50px;
      border: none;
      color: hsl(0, 0%, 100%);
      border-radius: 5px;
      margin: 8px;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
    }

    button:active, button:hover, button:focus { 
      background-color: hsl(75, 94%, 57%);
      color: #000;
    }
    button:focus-visible {
      outline: 2px solid hsl(7, 94%, 57%);
    }

```

## Author

- Website - [John Martz](https://obi-juan-kenobee.github.io/)
- Github - [Repos](https://github.com/obi-juan-kenobee)
- LinkedIn - [Connect!](https://www.linkedin.com/in/obi-juan-kenobi/)


## Acknowledgments

- Assets by Frontend Mentor.


