# Run server
cd feedr/backend
npm install
nodemon server

# Run Frontend
cd feedr
npm install
npm run dev

# Create New Git Branch
git branch (nombre)  -> Crear
git checkout -b (nombre) -> Entrar y Crear en nuevo Branch

# To do
TO DO in create.component.jsx:
 - Add a button to create a comment in create.component.jsx
 - Rename the comment.css to also include create and link it correcly to both comment.component.jsx and create.component.jsx

TODO in home.component.jsx:
 - Move the create component to a footer like functionality

TODO in backend:
 - /posts/update/:id should be able to update the likes/dislikes. Should be able to update the likes/dislikes by 1

TODO in frontend (create.component.jsx):
 - style the create component