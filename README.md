# DISCOVER

A photo portfolio website using the MERN stack

## Description

DISCOVER is a personal project I created in my 3rd year in my Computer Science Degree. I chose to do this project because I wanted to teach myself this particular stack since there is a high demand for it on the market and to better improve myself as a programmer.
It's a website with a React Frontend and a NodeJs Backend, which uses ExpressJs to POST and GET from a MongoDB. The typical MERN stack.

## Getting Started

If you want to run this website on your machine you will not be able to connect to the MongoDB since the connection URI is stored somewhere else for security purposes. You can add your mongoURI in the /config/keys.js to connect to your DB.

### Prerequisites

Have NodeJs install.
https://nodejs.org/

### Installing

In the NodeJs console change to the projects directory and start by installing the dependencies using

```
npm install
```

After you can simply run both the backend and the frontend with

```
npm run dev
```

## Deployment

To deploy a MERN project there are many options available, personally I chose Heroku. But you do you.
(The version in this repo already has the Heroku setup since Heroku is hosting the live version of this repo)

## Built With

Just to name a few:
react, react-router-dom, nodejs, expressjs, mongoose, passportjs, jwt authentication, react-redux, react-bootstrap, react-mdl, etc.

## Authors

* **Eduardo Felicio** - *Full project*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
