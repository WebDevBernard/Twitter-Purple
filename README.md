## Try the Live Demo

### [Live Demo!](https://twitterreact.vercel.app/)

## About

I made this app initially to practice structuring a React project and creating multiple reusable components.  One major challenge working with this app was managing state through props drilling.  For some reason, I could not get the state controlling the like toggle pass down through props.  I ended up making it work with Context API but I did not migrate the rest of the tweet state from App to the Context store.  Only later when I wanted to add more features like login and commenting, that’s why I moved everything to a Redux store. 
<br/>
The design of this project is based on a project I made at coding bootcamp: [https://github.com/WebDevBernard/tweeter](https://github.com/WebDevBernard/tweeter).  I did not use any of the original code, which was written in JQuery.  I also added additional features like commenting, persisting data with local storage, and login with firebase.

## Tech Stack

- Firebase authentication to manage user login
- React state management using Redux Toolkit
- Formik and Yup for form Vaildation
- Unique Names Generator to create randomize user names

## Preview

!["twitter tweeter react"](https://raw.githubusercontent.com/WebDevBernard/Portfolio/main/docs/twitter.png)

## Installation

`run: npm install`<br/>
`view on: localhost:3000`
