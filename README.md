# Run server
cd feedr/backend
npm install
nodemon server

# Run Frontend
cd feedr
npm install
npm run dev

# To do
TO DO in create.component.jsx:
 - Add a button to create a comment in create.component.jsx
 - Rename the comment.css to also include create and link it correcly to both comment.component.jsx and create.component.jsx
 - Create a post request to the backend to create a comment
 - Create a get request to the backend to get the comments

TODO in home.component.jsx:
 - Move the create component to a footer like functionality

TODO in backend:
 - Should no be able to create a post with a specific number of likes/dislikes, backend should handle it automatically withoud the user being able to set it
 - /posts/update/:id should be able to update the likes/dislikes. Should be able to update the likes/dislikes by 1

TODO in frontend (create.component.jsx):
 - style the create component