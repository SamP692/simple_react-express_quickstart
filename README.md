## Welcome to the **very** simple React + Express Quickstart
---
##### Why? #####
This is an incredibly simple quickstart using React JS front end and an Express JS server. There are a number of very powerful quickstarts for Express JS, React JS, and combinations of the two. If you're looking for a more comprehensive setup using both of these check out [This React+Express Quickstart](https://github.com/icflorescu/quickstart-express-react).

This quickstart is ideal for three types of people:
* Someone who wants a quick setup but one that's very flexible and customizable
* Someone who wants to quickly spike something that could require a custom server
* New developers hoping to construct a full stack project, but maybe yet comfortable with a wide range of technologies


##### Some Approach Stuff #####
The file structure is pretty flexible (more on customizing the structure below) but I wanted to offer a quick explanation on the approach. The intention here is to build a React JS single page application consuming an Express JS API, employing an MVC framework. The server is set up to use PostgreSQL database but this can be easily changed.


##### Getting Started #####
Once you've cloned this repository run you can run `npm start` right away, and then direct yourself to localhost:3000 on your browser.

**Dev Server Info:** The `start` command translates to `node server.js`, at which point your Express server will run your front-end React JS code through webpack and create a virtual bundle.js (referenced in the index.html). This quickstart DOES use *hot reloading* for updates to both server-side code AND client-side code, however you will need to refresh your browser to see the changes.

**IMPORTANT!** This quickstart includes a `.env` file with the port number used sample PostgreSQL variables. **This file should be added to your .gitignore right away**, especially if you anticipate using it to store any sensitive information.
