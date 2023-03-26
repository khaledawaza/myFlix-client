# myFlix-client
In this repository I built the client-side for my app based on its existing server-side code.

The API and the database that I built earlier meet the information needs of the Movie App users. In this repository I created the interface they’ll use when making requests to—and receiving responses from—the server-side. The client-side of my app includes several interface views (built using the React library) that handle data through the (previously defined) REST API endpoints.

The front-end and the back-end together form a complete web app built using full-stack JavaScript technologies known as MERN (MongoDB, Express, React, and Node.js).

The Movie App was deployed on Netlify.

GO TO THE APP
Blueprint and Techstack
Single-page application (SPA)
State routing to navigate between views and share URLs
Parcel as its build tool
React library and in ES2015+
Bootstrap as a UI library for styling and responsiveness
React Redux for state management
The 5 Ws
Who: The users of the Movie App: movie enthusiasts who enjoy reading information about different movies.
What: A single-page, responsive app with routing, rich interactions, several interface views, and a polished user experience.
When: the users will be able to use it whenever they want to read and save information about different movies.
Where: The app will be hosted online. The app itself is responsive and can therefore be used anywhere and on any device, giving all users the same experience.
Why: Movie enthusiasts like to be able to access information about different movies, whenever they want to. Having the ability to save a list of their favorite movies will ensure users always have access to the films they want to watch or recommend to their peers.
Essential Views & Features:
Main view
Returns ALL movies to the user (each movie item with an image, title, and description)
Filtering the list of movies with a “search” feature
Ability to select a movie for more details
Ability to log out
Ability to navigate to Profile view
Single Movie view
Returns data (description, genre, director, image) about a single movie to the user
Allows users to add a movie to their list of favorites
Login view
Allows users to log in with a username and password
Signup view
Allows new users to register (username, password, email, date of birth)
Profile view
Displays user registration details
Allows users to update their info (username, password, email, date of birth)
Displays favorite movies
Allows users to remove a movie from their list of favorites
Allows existing users to deregister
Dependencies
See package.json
