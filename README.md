# SEI Project 3 - Fitness Tracker App
This project was built with my GA classmates [Ana Solcan](https://github.com/solcana), [Hal Evans](https://github.com/halevans), and [Ethan Berk](https://github.com/ethandb23). We created a full-stack Fitness Tracker app using React, Node.js, Express, and MongoDB.

![Fitness Tracker App](https://user-images.githubusercontent.com/114579141/225710155-369c9b4c-ff5c-4e3d-8354-fb5c4fd88958.png)

Fitness Tracker is an app that allows the user to keep track of their workouts. As a user of Fitness Tracker, once you have registered for an account, you can create a workout. In each workout you can add a number of exercises, logging the weight used and number of reps. These exercises can be edited and deleted. You can also view your past workouts on your main dashboard and edit and delete them also. The user also has a profile page where they can update their profile.

## Demo
The App is deployed by Netlify and is available [here](https://fitness-tracker-ga-sei.netlify.app/user)

## Getting Started/Code Installation

To access and run the code for this project, follow these steps:
 - Download or clone the project repository from GitHub. You can do this by clicking on the green "Code" button and selecting "Download ZIP" to download a zipped version of the code, or by copying the repository URL and running git clone in your terminal.
 - Once you have the code downloaded or cloned, open the project folder in your code editor of choice.
 - Open the index.html file in your web browser to view the project.
 
## Timeframe
8 days - group project

Technologies Used
 - React.js
 - Node.js
 - Express
 - MongoDB/Mongoose
 - Bootstrap
 - Toastify
 - Ant Design
 - Fort Awesome icons
 - Axios
 - Chart.js
 - Nodemon
 - Bcrypt
 - Body-parser middleware
 - Passport
 - JWT
 - Dotenv
 - Cors
 - Git/GitHub
 - Balsamiq
 - Trello


## General Requirements
 - Build a full stack web application. Must be your own work.
 - Select a Project Idea of your own.
 - Use Express with React to build your application.
 - Deploy on Heroku or a similar platform so application is live on the web.
 - Craft a README.md file that explains your app to the world.

### Project Planning
 - Plan your application using:
    - User Stories
    - Wireframes
 - Present your project idea along with your planning documentation for project approval.

 
## Technical Requirements
 - Have at least 2 models (more if it makes sense).
   - Auth is a requirement.
 - Have full CRUD on at least one of your models.
 - Be able to Add/Delete on any remaining models.
 - Have high quality code:
   - Commit often and use meaningful commit messages.
   - Document your code well.
   - Follow accepted naming conventions.
   - Consistent indentation.
   - Well-structured and readable code.
   - Semantic naming of variables, functions, CSS classes, etc.
   - Short and clear functions that do one thing.
   - Efficient code - if you have your MVP, refactor.
   - DRY (Don't Repeat Yourself) code.
 - Be deployed on Heroku or a similar platform.
 - Craft a README.md file that explains your app.
 
Planning
Once we had decided on the app that we wanted to create, we began by deciding on the pages a user of our website would need to navigate it, while also meeting our MVP.

1. Login page (including authentication)
2. New user registration page
3. Profile page
4. Dashboard (once logged in), including exercises (edit/delete)
5. Workout Page (MODEL e.g. type of exercise: string, reps: number, weight: number .....)
6. Graph showing user workouts

Since we were four group members, each of us decided to take ownership of a particular backend & frontend aspect of the app
 - Ana developed the dashboard which would include details of the workouts the user has completed and allow the user to edit or delete exercises within the workout.
 - Hal developed the users workout page where they could create a workout, and add, edit and delete exercises within the workout.
 - Ethan proposed we create a graph to show the users workout progress.
 - And I developed the user login, new user registration and user profile page, including authentication. 

## Wireframes
As a team, we used Balsamiq to create our wireframes for the pages of the app. Planning these webpages enabled us to consider how the user would interact with them, which then helped us decide which information was necessary and the data needed in our schemas.

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
I created a Trello board to help manage the team project. The to-do section helped us keep track of what was still pending. The team could then assign themselves to the cards and move the card along the board until the task was complete.

<img width="1000" alt="Trello Board" src="https://user-images.githubusercontent.com/114579141/219604711-a7f46696-10e2-485e-93d4-acba3c634a4c.png">

## User Registration
My task was to work on the User model and create
![User Registration](https://imgur.com/ePvjfHD.gif)

## User Login
![User Login](https://imgur.com/PpPo37L.gif)
<img src="https://user-images.githubusercontent.com/114579141/225934376-792812b2-8e51-4fbf-8fc7-628cfb7ab0fe.png"
         alt="User Login" width="500" height="500">
    


