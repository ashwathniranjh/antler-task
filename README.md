# Antler-Task

Internship Application Task for Antler.

## Objective

### Build the following Web application
#### Summary - Show the latest Bitcoin price on a webpage
 
 
* Create a landing page with a navbar with a “SignUp/SignIn” menu which will take the users to a different page (Authentication Page) - After authentication show the Bitcoin price
 

* The authentication page will have Google SSO (Optional - Along with Email/Password Authentication with OTP verification). The Authentication feature is to be implemented using Firebase Authentication. 

* The user records (Just email in this case) is to be stored in a collection called “Users” in Firebase - Firestore (Firebase has a free tier).
 

* If the user’s authentication is successful - Display a Logout button which should log them out from the session. Take user to a page and display the Bitcoin price


* Bitcoin price should be fetched from a Firebase collection.


* Create a cloud function to get the Bitcoin price - For starting assume Bitcoin price to be a random no between (30,000 and 40,000 USD)


* This Cloud function triggers every 15 min and adds the bitcoin price to Firebase - Cloud function can be written in Python or NodeJS


* The frontend (React) loads the Bitcoin price from Firebase
1. (BONUS) LEVEL 2 : Use any API or scrape the price of Bitcoin from somewhere
2. (BONUS) LEVEL 3 : Show a Graph of Bitcoin price below the latest Bitcoin price and make the page responsive


## In the Application

#### Tech Stack and Frameworks

* React JS
* React Router
* Tailwindcss
* firebase
* firestore
* Chart.js

#### Features

* Google SSO  
* Original Price fetched from Coinbase API
* User Data and Price Data storage and retrieval using Firestore
* Real Time Price Update updating every 15 minutes
* Data Visualisation using Graph to represent past 12 hr price variation.

#### Hosting

* Netlify

### Link To Access
[https://objective-wozniak-07826e.netlify.app/](https://objective-wozniak-07826e.netlify.app/)
