# Project Repository

App is deployed on digital ocean: http://134.209.223.119:3000/

This repository will be used for team projects. Delete the contents of this file and replace with the contents of a proper README.md, as described in the [project setup instructions](./project-setup-instructions.md)

See the [Sprint Planning instructions](./sprint-planning-instructions.md) once the basic Project Kickoff tasks have been completed.

Every project must have a README.md that automatically renders on the project's main repository page with basic details of the project, including:

- a description of project, including the [Product Vision Statement](https://knowledge.kitchen/Scrum_development_framework#Product_vision_statement)

# Katalog Project Repository
Katalog is a platform that aims to help photocard collectors (specifically Kpop fans) find information about specific photocards (such as average market price) and expand their photocard collection. The website will serve as an archive with information on the photocards avaliable on the market. Each photocard page will show which users are selling or trading that photocard. Katalog will also provide valuable data (such as average market price) to buyers and sellers alike. 

## Product Vision Statement 
The Minimum Viable Product (MVP) is defined as the following themes:

1. Search
    - Home search bar
    - Search results 
    - Filtering system
    - Photocards information 
2. Account Management and Creation
    - Account creation (sign up)
    - Login 
    - Profile management 
    - Wishlist
    - Listing
3. Customer Support 
    - FAQ
    - Contact Us

## Core Team Members 
Lee Boodoo — [github](https://www.GitHub.com/LeeBoodoo)

Elizabeth Lee — [github](https://github.com/elizabethlee13)

Rachel Lin — [github](https://github.com/rclin1)

Ashley Sidoryk — [github](github.com/ashleysidoryk)

Sirui Wang — [github](https://github.com/David12345666)

Juana Ying Ng — [github](https://github.com/juanang207)

## Short History of How the Project Came to Be
Photocards are photo inclusions that are offered in Kpop albums. A random picture of a member is given in each album. This in turn led to a huge trading market where fans trade for their favorite member's photocards and try to complete their collections, similar to baseball cards and pokemon cards trading communities. Currently, trading or purchasing transactions are done through Twitter/Instagram or other social media platforms. However, it is very difficult to find certain photocards that you need for your collection and collectors have to constantly search and monitor several different platforms to find the most ideal transaction. 

Katalog was created as a way to alleviate the difficulties of trading/selling photocards. By creating a platform where users can easily navigate to find certain photocards up for trade/sale, this facillates collections' experience with trading, buying and selling photocards.

## Contribution
Information and instructions about how to contribute to the project here: [CONTRIBUTING.md](./CONTRIBUTING.md)


## Instructions for Building and Testing 
###### Before building app locally:
1. press green code button at the top of this repository page
2. copy the link provided and run `git clone REPLACE_WITH_COPIED_LINK` in your local terminal to copy the outer repository onto your local computer
3. git pull to make sure the repository has the most recent changes 
4. request the two `.env` files from us for the database and upload APIs to work
5. place the `.env` file with the first word `REACT` in the `front-end` directory
6. place the `.env` file with the first word `URI` in the `back-end` directory

###### To build the front-end: 
1. open a terminal on your local computer
2. enter the command `cd project-setup-team-chigan-systematic-katalog/front-end/` in the terminal to go to the front-end directory
3. enter the command `npm start` in your local terminal 
4. go to localhost:3000 to see the front-end website

###### To build the back-end: 
1. open a terminal on your local computer
2. enter the command `cd project-setup-team-chigan-systematic-katalog/back-end/` in the terminal to go to the back-end directory
3. enter `npm start` 
4. go to localhost:4000 to see backend GET/POST apis

###### To build front-end with back-end:
1. Open 2 local terminals 
2. in the first terminal, enter the command `cd project-setup-team-chigan-systematic-katalog/back-end/` to go to the back-end directory
3. enter `npm start` to build back-end
4. in the second terminal, enter the command `cd project-setup-team-chigan-systematic-katalog/front-end/` to go to the front-end directory
5. while keeping first terminal open and running, enter `npm start` to build front-end 
6. go to localhost:3000 to see front-end with back-end build

###### To test the apis with our unit tests 
1. cd into the `back-end` directory  
2. enter `npm test` to run tests
3. `ctrl + c` after you see the # passing to get overall stats.

###### To deploy and view app on digital ocean:
1. request to be added to our digital ocean account
2. `ssh` onto digital ocean ip using the provided username and password from us
4. if repo do not exist already, `git clone` repository onto the server
5. if repo exists, `git pull` to get most recent changes
6. `cd` into the front-end folder
7. run `REACT_APP_api_base=http://134.209.223.119:4000 pm2 start npm -- start` to deploy front-end 
8. `cd` into the back-end folder  
9. run `pm2 start server.js` to deploy back-end 
10. `pm2 kill` to stop all processes

To view deployed app, go to the link: http://134.209.223.119:3000/

###### Continuouse Integration With Travis CI
1. Every time a commit is pushed or a pull request has been made, a Travis CI build is automatically triggered.

2. You can check the Travis CI build status page of our repository [here](https://travis-ci.com/github/agile-dev-assignments/project-setup-team-chigan-systematic-katalog) to see if the build passes or fails according to the return status. 

## Additional Links to Markdown documents
[Project Proposal](https://github.com/agile-dev-assignments/project-proposal-jyn229/blob/main/README.md) — initial proposal and concept idea

[User Experience Design](https://github.com/agile-dev-assignments/user-experience-design-team-chigan-systematic-katalog) — includes app map, wireframe and prototype
