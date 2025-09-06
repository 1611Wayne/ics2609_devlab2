# ics2609_devlab2

Project Overview:
The purpose of this lab was to learn how to connect a Node.js server to a MySQL database, handle requests and responses, and test everything with Postman.

Setup Steps
1.	I created a new database in phpMyAdmin called lab_crud_3isc.
o	Inside it, I added a file named courses.
2.	After that, I initialized a Node.js project and installed the necessary dependencies like express, mysql2, and cors.
3.	I then made a .env.example file to keep my database connection details safe.

Example values:

DB_HOST=localhost

DB_USER=

DB_PASS=

DB_NAME=

PORT=3000

4.	Once the environment was ready, I wrote the API routes for courses and tested them using Postman.
5.	Finally, I made sure CORS was enabled so the API could accept requests from the browser as well.

How to Run:

To run the project, I start the MySQL server first and make sure the lab_crud_3isc database is ready.
Then, I go to the project folder and start the backend with:

npm run dev

When everything is correct, the terminal shows:

🚀 Server running…
✅ MySQL connected

At that point, I can already use Postman or the browser to test the API.

API Endpoints:

Health Check

- GET /api/health → Returns server status.

Students

-	POST /api/students → Add a new student.

-	GET /api/students → Retrieve all students.

-	GET /api/students/:id → Get a student by ID.

-	PUT /api/students/:id → Update a student by ID.

-	DELETE /api/students/:id → Delete a student by ID.
Courses

-	POST /api/courses → Add a new course.

-	GET /api/courses → Retrieve all courses.

-	GET /api/courses/:id → Get a course by ID.

-	PUT /api/courses/:id → Update a course by ID.

-	DELETE /api/courses/:id → Delete a course by ID.


