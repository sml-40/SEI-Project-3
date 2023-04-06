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

## Build Process

 - Together, our team collaborated on the initial setup of the backend. We were all eager to use what we had learned in class and to construct the beginnings of the backend as a group before deciding which parts we would each handle.  
 - With Ana as the driver, we pair-programmed in the backend:
    - Creating the configuration folder, creating a base name for the MongoDB and setting up our development and test environments.
    - We implemented middleware functions, for example the bodyparser middleware which parses JSON requests into JavaScript objects before they reach the route files. And the ‘.use’ method to set up middleware for Express apps and to mount imported routers.
    - We created our schemas using referenced data for the User, Exercise, and Workout models:

<img width="509" alt="user schema" src="https://user-images.githubusercontent.com/114579141/230321577-52e037d6-95c3-4979-b87a-d09bb91ac746.png">
<img width="527" alt="exercise schema" src="https://user-images.githubusercontent.com/114579141/230321598-884e7ae8-090d-406a-984d-ef53729375b4.png">

 - The workout model had embedded and referenced data, for example, we embedded the exercise schema data into the workout model. Hal then referenced the User in the workout model to connect the two models.

<img width="807" alt="workout schema" src="https://user-images.githubusercontent.com/114579141/230321726-21f8d565-5b16-40e9-bdbb-88bf5074c153.png">

 - I took ownership of adding the routes for full CRUD functionality and then testing them on Postman to ensure they worked as intended.
 - After we had the initial setup of the backend we divided up our tasks. 
 - My task was to work on the User model, and to create a user login page and user profile, and also the new user registration. I knew this would be challenging because we had touched on authentication the day before in class but we had not had a chance to practise yet, so I was excited to get started.

## User Login
 - I began by creating a user profile component file in React. I wanted to have a user profile icon which I found using Ant Design Avatar.
 
![User Login](https://imgur.com/PpPo37L.gif)

 - I wanted the profile page to allow the user to update their profile picture and for some of the users workout information to display dynamically:

![Profile login](https://user-images.githubusercontent.com/114579141/230323355-a78b36de-ef0a-4284-a747-46c23c85b9e4.png)

 - When the user clicks on their profile icon, a model appears to allow the user to change their avatar. Again, I used Ant Design for the basic modal. 
 - I used a Bootstrap Form for the user login page, so that it was in keeping with the style for the rest of the site.
 - I wanted a pop-up to appear after login to let the user know if they had logged in successfully or if there was an error. I used Toastify in the Axios call for this as it was a perfect solution to make these customizable pop-ups:
 
 ![toast error](https://user-images.githubusercontent.com/114579141/230324143-8d95a503-5961-449c-b1f8-bced8a767d0b.png)

### Backend development for Login Route

In the backend, I was responsible for developing the login route:

![Login route](https://user-images.githubusercontent.com/114579141/230324719-2a5ab326-ebbc-490e-861a-ba3f3df1cf37.png)

 - I thoroughly tested this route by console logging each step to ensure that it was functioning properly. 
 - To search for the user in the database, I used MongooseJS queries documentation to learn how to use the findOne query. 
 - Once the user was found, I used Bcrypt documentation to learn how to compare the password with the stored hash. 
 - If the password was correct, I generated and sent a JWT using the user's ID as the payload. 
 - I also added error handling to return appropriate status codes and error messages if the user didn't exist or if the supplied credentials were invalid.

## User Registration
 - If the user clicks the ‘Register’ button on the login page then this modal appears:

![User Registration](https://imgur.com/ePvjfHD.gif)

 - I used Toastify here for the pop-ups to let the user know if registration was successful or if there were errors.

### Backend development for Register Route

 - I was responsible for developing the register route in the backend. To ensure that everything was working properly, I extensively tested each step of the process by logging the output to the console.
 - When developing the route, I referred to the MongooseJS queries documentation to create a query that would check whether a user with the given username, first name, or last name already existed in the database. If the user did not already exist, I created a new user object with the supplied information.
 - To keep the user's password secure, I used the Bcrypt library to create a hashed password with plenty of salt. I referred to the Bcrypt documentation to learn how to use the genSalt() and hash() functions.
 - Once the new user object had been created and the password hashed, I saved the user to the database and generated a JSON Web Token (JWT) using the user's ID as the payload. The token was then sent back to the client in the response.
 - By thoroughly testing the register route and using documentation as needed, I was able to create a secure and functional route for users to create new accounts in the system.

![register route](https://user-images.githubusercontent.com/114579141/230326245-f5124377-80aa-4349-9459-96539d555125.png)
![register hash pass](https://user-images.githubusercontent.com/114579141/230326287-b07fecb0-5d9b-4ad2-a682-a0d0403a68bb.png)

### Frontend NavBar Component
 - I was responsible for dynamically rendering the NavBar component based on the user's authentication status, adding conditional rendering for the login and sign out links, and displaying the user's name if they are logged in:

![Navar login](https://user-images.githubusercontent.com/114579141/230326841-60bd714c-8c14-41b1-bc99-00fcc5feda0d.png)

 - I used a ternary operator to check the isLoggedIn state of the component. If the user is logged in, the "Sign Out" link is displayed and clicking on it triggers the handleLogout method. If the user is not logged in, the "Login" link is displayed.
 - I added conditional rendering of the user's name in the NavBar component. If the user is logged in, the user's name is displayed.

Challenges

I faced a challenge when trying to display the username in the navbar after a user logs in, as the props were not passing correctly from the parent component to the child component. To troubleshoot this, I used the componentDidUpdate() method and console.log to check if the props were being passed correctly, which they were:

![comp did mount](https://user-images.githubusercontent.com/114579141/230327743-c1929a19-52f1-4a4d-b5c1-446286032525.png)
 
After further investigation, I realised that the issue was caused by the user being redirected to a different page after logging in, which caused the props to be lost. To fix this, I used local storage and state to persist the user's login status and username across page refreshes.

In the handleLogin() function of the App component, I set the username in state and also stored it in local storage. 

![Screenshot 2023-04-06 at 09 59 02](https://user-images.githubusercontent.com/114579141/230328051-19bda4f6-f5ed-4a9b-a174-91e057db7fcb.png)

In the handleLogout function, I removed the username and isLoggedIn from both state and local storage.

![handle logout](https://user-images.githubusercontent.com/114579141/230328316-a96065f5-e246-4f3d-8f1c-6f833a875f3a.png)
 
Finally, I initialised the isLoggedIn and username state from local storage in the constructor of the App component. This solution allowed the username to be displayed in the navbar consistently after a user logs in.

## Wins

 - Authentication - Working on the user authentication and profile features was an extremely rewarding experience for me, particularly when I viewed my first successfully hashed user password in the database.
 - Implementing the routes for full CRUD functionality - This was an excellent opportunity for me to deepen my understanding of the MERN stack and RESTful API design. By taking ownership of these tasks and testing them thoroughly on Postman, I gained valuable experience in troubleshooting and debugging, which helped me to become a more effective developer. 
 - Collaborating with my team - Collaborating on the initial backend setup and middleware was a great way to learn from others and share knowledge, which improved our collective understanding of the technologies we were working with.

## Key Learnings
 - This was my second project where I used React and with the help of my colleagues I felt a lot more comfortable working with the components and passing props.
 - I also feel like I have a better understanding of React Lifecycles, especially after using the ComponentDidUpdate() method to track the passing of the username prop.
 - It was also interesting to use different error status codes and using Toastify for the associated error pop-up for the user. I felt like this practice helped with my understanding of backend web development. This [webFX]([url](https://www.webfx.com/web-development/glossary/http-status-codes/)) website in particular was a valuable resource.
 - During this project, I also gained experience using the Mongo shell in the terminal for the first time. I learned how to use the mongosh command-line interface to interact with the MongoDB database, including using different references to access the database, collections, and documents.
 - Authentication - Using the Bcrypt library to hash and verify passwords in Node.js helped to deepen my understanding of the MERN stack.







<img src="https://user-images.githubusercontent.com/114579141/225934376-792812b2-8e51-4fbf-8fc7-628cfb7ab0fe.png"
         alt="User Login" width="500" height="500">






    


