# JEThelper-v2
JEThelper (Journal Editorial Task Helper) is an Academic Article Submission Management System that has been built to aid the work of editorial assistants of the Asian Journal of Latin American Studies. 

## Features
#### For Authors
- [X] Submit a new manuscript to be reviewed
- [X] Check the current status of the blind reviewing process

#### For Reviewers
- [X] Submit a review for the manuscript they have been assigned
- [X] Keep track of the articles they have completed/uncompleted/requested to review

#### For Editorial Assistants
- [X] Check the status of all the submitted manuscripts
- [X] Add reviewers to a submitted manuscript
- [X] Auto-generate quarterly editorial report
- [X] Auto-generate expenditure reports
- [X] Auto-generate email bodies to send to authors and reviewers based on the status of the reviewing process

## Instructions to test the web application
1. cd into `JEThelper-v2/jet-helper-client` directory
2. Type `yarn install`. This will download all the required client-side dependencies. 
3. cd into `JEThelper-v2/jet-helper-server` directory
4. Type `yarn install`. This will download all the required server-side dependencies. 
5. Place the MySQL database credentials `db-config.js` in the `../jet-helper-server` directory.
6. While in `../jet-helper-server`, type `yarn start` in the terminal to start the server. 
7. In a separate terminal window, while in `../jet-helper-client`, type `yarn start` to start the client-side code.
8. A browser should automatically open. If not, enter this link manually: http://localhost:3000

## Developer
* [Tom JH Lee](https://www.linkedin.com/in/jhltom/) 
* Tools utlized: JavaScript, ReactJS, NodeJS, ExpressJS, MySQL, MariaDB, RESTful API
