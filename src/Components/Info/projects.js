import safeFlightGif from '../Gifs/safe-flight-example.gif';
import mernScraperGif from '../Gifs/react-mongo-scraper-example.gif';
import freelancersGif from '../Gifs/freelancers-example.gif';
import eatTheBurgerGif from '../Gifs/eat-the-burger-example.gif';
import friendFinderGif from '../Gifs/friend-finder-example.gif';
import giftasticGif from '../Gifs/giftastic-example.gif';

const projects = [
    {
        "id": 1,
        "projectName": "Safe Flight",
        "exampleGif" : safeFlightGif,
        "summary": "Safe Flight is a web application designed to help the user plan out a flight itinerary with airlines that are safe, secure, and not prone to malfuntion.",
        "techUsed": "This project was built with React, MongoDB, Express, Node.js, Reactstrap, React-Router-Dom, Mongoose, Passport.js, Moment.js, Axios, Bcrypt, Bootstrap, Node-sass, and this project is deployed with Heroku.",
        "githubLink": "https://github.com/JYoung32/safe-flight",
        "deployedLink": "https://floating-everglades-15450.herokuapp.com/"
    },
    {
        "id": 2,
        "projectName": "MERN Scraper",
        "exampleGif" : mernScraperGif,
        "summary": "MERN Scraper is a news article web application that allows the user to view news articles, save an article, it can also allow the user to post and delete notes on a save article.",
        "techUsed": "This project was built with React, MongoDB, Express, Node.js, Reactstrap, Bootstrap, Mongoose, Axios, Cheerio, React-Router-Dom, and this project is deployed to Heroku.",
        "githubLink": "https://github.com/JYoung32/react-mongo-scraper",
        "deployedLink": "https://thawing-lowlands-26119.herokuapp.com/"
    },
    {
        "id": 3,
        "projectName": "Freelancers",
        "exampleGif" : freelancersGif,
        "summary": "Freelancers is a web application designed to assist the user with connect them to a local expert to get the job done. In addition, a professional can come visit the app and leave their information to later be called upon to do a job.",
        "techUsed": "This project was built with Express, Express-Handlebars, HTML, CSS, Javascript, MySQL, Sequelize, Node,js, Animate.CSS and this project is deployed to Heroku.",
        "githubLink": "https://github.com/JYoung32/freelancers",
        "deployedLink": "https://obscure-savannah-83730.herokuapp.com/"
    },
    {
        "id": 4,
        "projectName": "Eat The Burger",
        "exampleGif" : eatTheBurgerGif,
        "summary": "Eat The Burger is a logging application that allows a user to input the name of their favorite burger or one they would like to eat which will then be saved to the database. The user also then can decide wether or not to eat the burger.",
        "techUsed": "This project was built with Express, Express-Handlebars, MySQL, Node.js, JQuery, Javascript, HTML, CSS, and this project is deployed to Heroku.",
        "githubLink": "https://github.com/JYoung32/burger",
        "deployedLink": "https://murmuring-depths-00456.herokuapp.com/"
    },
    {
        "id": 5,
        "projectName": "Friend Finder",
        "exampleGif" : friendFinderGif,
        "summary": "Friend Finder is a web application that is designed to match you with a new friend after the user has completed the survey and compare your answers with previous users who have visted.",
        "techUsed": "This project was built with Express, Node.js, Javascript, Jquery, HTML, CSS, Bootstrap, and this project is deployed to Heroku.",
        "githubLink": "https://github.com/JYoung32/friendfinder",
        "deployedLink": "https://secret-cove-88493.herokuapp.com/"
    },
    {
        "id": 6,
        "projectName": "Giftastic",
        "exampleGif" : giftasticGif,
        "summary": "Giftastic is a web application that is designed to dynamically render GIFs using Giphy's API. The User can use the search bar to search for new GIFs or the buttons to show the options that already have been searched.",
        "techUsed": "This project was built with Javascript, JQuery, HTML, CSS, Bootstrap, Giphy's API, and this project is deployed with Heroku.",
        "githubLink": "https://github.com/JYoung32/giftastic",
        "deployedLink": "https://jyoung32.github.io/giftastic/"
    },
];

export default projects;