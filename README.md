## Try the Live Demo

### [Live Demo!](https://twitterreact.vercel.app/)

## About

A simple Twitter clone and a remake of this app made at Lighthouse Labs: [https://github.com/WebDevBernard/tweeter](https://github.com/WebDevBernard/tweeter). I made this project to practice React with Redux, Context, useReducer. It has the following features:

- Written with modern React tools, using reuseable components: Modal, Button, Card, Header, Footer.
- User content saved to localStorage. Tweets can also be liked/disliked or deleted.

// add Firebase fetch for tweets add, delete, like
// add localStorage for tweet add, delete, like
// add auth-context and validation with formik
// add Firebase login
// add User update email route
// clean up CSS
// refs for char count in tweet form
// add a descriptor on right side, change to single center row, login on left side
// useEffect animation when adding new tweet

const isEmail = (value) =>
value
.toLowerCase()
.match(
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)\*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

## Preview

!["twitter tweeter react"](https://raw.githubusercontent.com/WebDevBernard/Portfolio/main/docs/twitter.png)

## Installation

`run: npm install`<br/>
`view on: localhost:3000`
