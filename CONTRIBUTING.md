# Guide to Contributing

### Standup Schedule
Monday and Wednesday 3pm

Friday 12:15pm

https://nyu.zoom.us/j/2613389477

### Values and Expectations
This project serves to create an organized and centralized platform where K-pop artist card collectors can easily buy and sell photo cards. The team values effective communication and collaboration therefore it is expected that others who want to contribute to this project as well uphold these values. If a contribution is made, it should be fully completed in a timely manner in order for it not to hinder the progress of the project. For example, if a new feature is to be implemented, this feature must be completed in full; a half done implementation will not be approved.

### Git Workflow
The team follows a Centralized Workflow with Feature branching when needed. Each developer clones the central repository to their own local computers, edit files and commit changes locally, and then push these changes into the master branch of the central repository. Before adding changes, the team pulls any new changes made prior to the last time they had worked on the project to ensure that no merge conflicts occur. Changes are only directly made to the master branch when all members of the team approve of it verbally otherwise changes must be made to other branches and submitted as a pull request to be reviewed and approved by the team.  

### Rules of Contributing
Make sure to contribute as much as stated and that the contribution is completed in a reasonable timeframe. When making these changes or additions, please fork the repository so that the changes will not directly affect the original project. Commit them to a different branch and submit as a pull request and wait to get the team's approval for merging. We will appreciate any contributions that may improve user experience, additional interesting features, corrections to any bugs, searching capability enhancements, etc.

### Conflict Resolution
Any disagreements or conflicts will be resolved through clear communication and compromise. If a compromise cannot be reached, then a vote will be taken on the matter or the issue will be discussed with the professor.

### Instructions for Setting Up the Local Environment
Click the fork button in the repository and from that fork, clone the repository locally from Github through terminal using **git clone URL**. Go to the location of the fork you cloned on your local computer with the **cd** command and type **git remote -v** which you should see the current configured remote repository for the fork. Then type **git remote add upstream URL** and paste the same cloned URL so that the fork is synced with the upstream repository. Next create branches for your edits with **git checkout -b nameofbranch**.

### Instructions for Building and Testing  
###### Before building app locally:
1. go to the [the outer repository](https://github.com/agile-dev-assignments/project-setup-team-chigan-systematic-katalog)
2. press green code button
3. copy the link provided and run `git clone REPLACE_WITH_COPIED_LINK` in your local terminal to copy the outer repository onto your local computer
4. git pull to make sure the repository has the most recent changes 
5. request the two `.env` files from us for the database and upload APIs to work
6. place the `.env` file with the first word `REACT` in the `front-end` directory
7. place the `.env` file with the first word `URI` in the `back-end` directory

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
9. `run pm2 start server.js` to deploy back-end 
10. `pm2 kill` to stop all processes

To view deployed app, go to the link: http://134.209.223.119:3000/
