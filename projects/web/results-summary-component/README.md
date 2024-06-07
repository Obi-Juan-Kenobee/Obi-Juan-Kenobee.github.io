# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![](./design/active-states.jpg)

### Links

- Solution URL: [Repo](https://github.com/Obi-Juan-Kenobee/Obi-Juan-Kenobee.github.io/tree/main/projects/web/results-summary-component)
- Live Site URL: [Live Site](https://obi-juan-kenobee.github.io/projects/web/results-summary-component/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow and responsive design

### What I learned

I learned about about applying gradient backgrounds in CSS. There was some incompatibility because when I first did my research I came across the old version of the property.
However, further research on MDN documentation found that this is no longer supported and what the new version is.
I also learned about the use of the scale() function. This function allowed me to scale the images for the categories. Useful because I did not want to keep
adding classes to the HTML to target each paragraph individually and keep the code clean.

```css
.top-results {
  background-color: hsl(252, 100%, 67%);
  background-image: linear-gradient(
    to top,
    hsl(241, 81%, 54%),
    hsl(252, 100%, 67%)
  );
  color: white;
  border-radius: 0 0 50px 50px;
  padding: 30px;
}

.top-circle {
  background: linear-gradient(
    to bottom,
    hsla(256, 72%, 46%, 1),
    hsla(241, 72%, 46%, 0)
  );
}
```

### Useful resources

- [MDN Linear Gradients](mdn.com/en-us/docs/Web/CSS/linear-gradient) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [MDN scale function](mdn.com/en-us/docs/Web/CSS/scale) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- Website - [John Martz](https://obi-juan-kenobee.github.io/index.html)
- Github - [@obi-juan-kenobee](https://github.com/obi-juan-kenobee)
- LinkedIn - [Connect!](https://www.linkedin.com/in/obi-juan-kenobi/)


## Acknowledgments

Assets by Frontend Mentor.
