# Full Stack Employee Management System

This is a full-stack user management application. The project is divided into two parts:

- `fronendt`: A front-end application built using React.js and Bootstrap 5.
- `backend`: A back-end REST API built with Spring Boot, Spring Data JPA, and MySQL.

## FullStack-Front

The front-end application is designed with a focus on User Experience. It provides an easy-to-use interface for managing users. Bootstrap 5 is used for the styling, providing a modern, responsive design. The application includes functionality to add, update, view and and delete employees.

### Installation

1. Install [Node.js and npm](https://nodejs.org/en/download/) (npm is included with Node.js) on your machine.
2. Navigate to the `frontend` directory.
3. Run `npm init vite` and follow the instructions
4. Run `npm install` to install the dependencies.
5. Run `npm run dev` to start the application.
6. Open your browser to `http://localhost:5173` to view the application.

## FullStack-BackEnd

The back-end REST API is implemented using Spring Boot and Spring Data JPA with a MySQL database. It provides CRUD operations for a `Employee` model. The application includes exception handling, a repository for data access, and a controller for handling HTTP requests.

### Installation

1. Ensure you have a MySQL database running. You can update your database name, MySQL username, and password in the `application.properties` file in the `src/main/resources` directory.
2. Import the `backend` directory as a Maven project in your IDE.
3. Run the application from your IDE.
4. The API will be available at `http://localhost:8089`.

## Usage

The front-end application communicates with the back-end API to create, read, update, and delete users.

![EmployeeManagementSystemHome](https://github.com/KaranParikh96/FullStackProj/blob/main/assets/allusersmain.png)

![CreateEmployee](https://github.com/KaranParikh96/FullStackProj/blob/main/assets/createmain.png)

![EditEmployee](https://github.com/KaranParikh96/FullStackProj/blob/main/assets/updatemain.png)

##Test

#Get All Employees:

![getAllUsers](https://github.com/KaranParikh96/FullStackProj/blob/main/assets/getalluserspostman.png)

#Get Employee By Id(1):
![getUserById](https://github.com/KaranParikh96/FullStackProj/blob/main/assets/find1postman.png)

#Create Employee:
![CreateUser](https://github.com/KaranParikh96/FullStackProj/blob/main/assets/createuserpostman.png)

#Get All Employees:

![getAllUsers](https://github.com/KaranParikh96/FullStackProj/blob/main/assets/getallusers_createpostman.png)

#Update Employee with Id(6):

![UpdateUser](https://github.com/KaranParikh96/FullStackProj/blob/main/assets/updateuserpostman.png)

#Get All Employees:

![getAllUsers](https://github.com/KaranParikh96/FullStackProj/blob/main/assets/getallusers_updatepostman.png)

#Delete Employee with Id(6):

![DeleteUser](https://github.com/KaranParikh96/FullStackProj/blob/main/assets/deletuser_postman.png)

#Get All Employees:

![getAllUsers](https://github.com/KaranParikh96/FullStackProj/blob/main/assets/getallusers_deletepostman.png)




