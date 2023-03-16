# SEI Project 3 - Fitness Tracker App
This project was built with my GA classmates [Ana Solcan](https://github.com/solcana), [Hal Evans](https://github.com/halevans), and [Ethan Berk](https://github.com/ethandb23)

![Fitness Tracker App](https://user-images.githubusercontent.com/114579141/225710155-369c9b4c-ff5c-4e3d-8354-fb5c4fd88958.png)

Fitness Tracker is an app that allows the user to keep track of their workouts. As a user of Fitness Tracker, once you have registered for an account, you can create a workout. In each workout you can add a number of exercises, logging the weight used and number of reps. These exercises can be edited and deleted. You can also view your past workouts on your main dashboard and edit and delete them also. The user also has a profile page where they can update their profile.

## Demo
The App is deployed by Netlify and is available [here](https://fitness-tracker-ga-sei.netlify.app/user)

## Brief
 - Build a full stack web application. Must be your own work.
 - Select a Project Idea of your own.
 - Use Express with React to build your application
 - Deploy on Heroku or a similar platform so application is live on the web
 - Craft a README.md file that explains your app to the world
 
## Technical Requirements
 - Have at least 2 models (more if it makes sense)
   - Auth is a requirement
 - Have full CRUD on at least one of your models
 - Be able to Add/Delete on any remaining models
 - Have high quality code:
   - Commit often and use meaningful commit messages
   - Document your code well.
   - Follow accepted naming conventions
   - Consistent indentation
   - Well-structured and readable code
   - Semantic naming of variables, functions, CSS classes, etc.
   - Short and clear functions that do one thing
   - Efficient code - if you have your MVP, refactor
   - DRY (Don't Repeat Yourself) code
 - Be deployed on Heroku or a similar platform
 - Craft a README.md file that explains your app.
 
 ## Technologies
  - MongoDB
  - Express
  - React.js
  - Node.js
  - JWT
  - Bcrypt
  - Axios
  - Git + GitHub
  - Bootstrap
  - Toastify
  - Awesome Fonts
 
 
#### Planning

1. Login page (including authentication)
2. New user registration page
3. Profile Page / Dashboard (once logged in)
4. Workout Page (MODEL e.g. type of exercise: string, reps: number, weight: number .....)
5. General Blog/Article Page (e.g. food, workout tips etc.)
   - Weight, water, calories intake, body measurements (MODEL e.g. weight: number, calories: number .....)

#### Wireframes
As a team, we used Balsamiq to create our wireframes for the pages of the app. Planning these webpages enabled us to consider how the user would interact with them, which then helped us decide which information was necessary and the data needed in our schemas

![Wireframe for Login](/assets/Images/Login%20Page.png)

![Wireframe for Profile/Dashboard](/assets/Images/Profile_Dashboard.png)

![Wireframe for Exercise Page](/assets/Images/Workout%20Page.png)

#### User Stories

- [ ] As a user I want to be able to login, so that I can access my profile
- [ ] As a user I want to be able to sign up, so that I can start using the fitness tracker
- [ ] As a user I want to be able to view dashboard, so that I can keep track of my exercises
- [ ] As a user I want to be able to add a exercise, so I can keep track of it
- [ ] As a user I want to be able to edit a exercise, so I can keep it up to date
- [ ] As a user I want to be able to delete a exercise, so I can keep the list up to date
- [ ] As a user I want to be able to view all exercises, so I see my history
- [ ] As a user I want to be able to edit my profile, so I can keep it up to date
- [ ] As a user I want to be able to navigate to each page, so that I can go to any page
- [ ] As a user I want to be able to add in the weight for each exercise, so that I can keep track of my progress
- [ ] As a user I want to be able to add in the reps for each exercise, so that I can keep track of my progress
- [ ] As a user I want to be able to finish the workout, so that all my exercises are saved to my history

#### ERD
As a team, we used SmartDraw to create the Entity Relationship Diagram. Based on the diagram:
 - A user can have many workouts
 - A workout can have many exercises
 - A workout is associated with the user by user_id

![Entity Relationship Diagram](/assets/Images/ERD.png)

#### Trello - Project Management
We created a Trello board to help manage the team project. The to-do section helped us keep track of what was still pending. One of the team could then assign themselves to the cards and move the card along the board until the task was complete

<img width="1399" alt="Screenshot 2023-02-17 at 09 20 43" src="https://user-images.githubusercontent.com/114579141/219604711-a7f46696-10e2-485e-93d4-acba3c634a4c.png">

