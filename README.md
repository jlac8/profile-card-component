# Make It Real - Profile Card Component

This is a solution to the Profile Card Component project of the Make It Real course.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
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

- Task 1
- Task 2

### Screenshot

![](./screenshot.jpg)

## My process

1. Create Semantic HTML
2. Create Global Styles
3. Create React Components
4. Add BEM notation classes
5. Add styles to components
6. Add media query
7. Add background

### Built with

- Semantic HTML5 markup
- React Components
- CSS custom properties
- BEM notation
- Flexbox
- Mobile-first workflow

### What I learned

Use destructuring in props and add 2 background images.

```css
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--bg-color);
  background-image: url(..\public\assets\bg-pattern-top.svg),
    url(..\public\assets\bg-pattern-bottom.svg);
  background-position: calc(-978px + 52vw) -489px, 52vw calc(100vh - 489px);
  background-repeat: no-repeat;
}
```

```jsx
import PropTypes from "prop-types";

function SocialMediaStat({ number, stat }) {
  return (
    <div className="profile-card__stat">
      <div className="profile-card__stat-number">{number}</div>
      <div className="profile-card__stat-type">{stat}</div>
    </div>
  );
}

SocialMediaStat.propTypes = {
  number: PropTypes.string.isRequired,
  stat: PropTypes.string.isRequired,
};

export default SocialMediaStat;
```

### Continued development

Use component styled or Sass.

### Useful resources

## Author

- Website - [Add your name here](https://www.your-site.com)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
