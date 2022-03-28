import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);

// after Finishing the project we can deploy the project
// backEnd in heroku
// frontEnd in firebase

// Heroku
/*
  -> first add .gitignore
  -> so first a new app in heroku and 
  -> and after that go the server root folder
  -> and then do : git init
  -> and then wirte: heroku git:remote -a <app name>
  -> and then write : git add .
  -> and then write : git commit -am "make it better"
  -> and then write : git push heroku master
  -> and you can see the log by : heroku logs --tail
*/

// Firebase
/*
  -> now just copy the link of the server in this case:
      -> https://tinder-clone-backend-roman.herokuapp.com/
  -> and then put that in the axios.js file because now server is running on:
      -> https://tinder-clone-backend-roman.herokuapp.com
  -> now go the client root folder
  -> and if you had not already install firebase-tools then write:
      -> npm i -g firebase-tools
  -> and the you have to log in in the firebase so write :
      -> firebase login
  -> and then : firebase init
  -> and then check on the firebase hosting
  -> and then exsiting project
  -> and then chose the project
  -> What do you want to use as your public directory? : build
  -> Configure as a single-page app (rewrite all urls to /index.html)? yes
  -> and then: npm run build
  -> and then: firebase deploy
*/
