/*
**********Inital setup**********

1 . visit : console.firebase.google.com;
2 . create project (skip google analytics)
3 . register app (create config)
4 . install firebase : npm i firebase
5 . add config file to project
6 . Danger! : Do not publish or firebase config to public by pushing those to github 
***********Integration***********

7 . Visit : firebase > Go to Docs > Build > Authentication > Web > Get started
8 . export app form the firebase.init.js file 
9 . import getAut form firebase/auth and app
10 . make const auth = getAuth(app)
***************Provider setup************

11 . import googleAuthProvider and make a provider
12 . signInwithPopUp and pass auth and provider
13 . activate sign-in method (like : google facebook, github etc)
*/