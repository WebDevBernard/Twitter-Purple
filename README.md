## Try the Live Demo

### [Live Demo!](https://twitterreact.vercel.app/)

## About

- I initially made this app to practice structuring a React project and creating multiple reusable components.  One major challenge working with this app was managing state through props drilling.  For some reason, I could not get the state controlling the like-toggle to pass down state through props drilling.  I ended up making it work with Context API but it did not make sense just to have the "like" state in its own store.  Only later when I wanted to add more features such as login and commenting, that’s when I moved everything controlling the tweet state to a Redux store. 

- The design of this project is based on a project I made at coding bootcamp: [https://github.com/WebDevBernard/tweeter](https://github.com/WebDevBernard/tweeter).  I did not use any of the original code, I just used it as wireframe for my React project.  I also added additional features like commenting, persisting data with local storage, and login with Firebase.

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
