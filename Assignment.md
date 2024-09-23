### **MERN Stack (MongoDB, Express.js, React, Node.js)**

1. **Node.js**: Write a basic Node.js server that listens on port 3000 and returns a "Hello, World!" message when the root URL is accessed.
a. It was done in [MERNquestion1 folder](./MERNquestion1/).
2. **Express.js**: Create a simple REST API using Express.js with a single route /users that returns a JSON list of users.
a. It was done in [MERNQuestion2 folder](./MERNQuestion2/).
3. **React**: Build a basic React component that fetches the list of users from the /users API route (from question 2) and displays them in a table.
a. It was done in [User list in MERNQuestion3](./MERNQuestion3/user-list/).
4. **MongoDB**: Create a MongoDB schema for storing user data (name, email, age), and write a script to insert a new user into the collection.
a. It was done in python script [MERNQuestion](./MERNQuestion4.py).
5. **Express.js + MongoDB**: Create an Express.js route to fetch a user by their email from the MongoDB database.
a. It was done in [MWERNQuestion5](./MERNQuestion5/routes/routes.js).
6. **React + State Management**: Build a form component in React that allows users to submit their name, email, and age. On submission, send the data to the backend API and update the state to display the new user.
a. It was done in [MERNQuestion3](./MERNQuestion3/user-list/src/components/).
7. **React Routing**: Set up React Router in an application to navigate between a Home page and a Users page.
a. It was done in [MERNQuestion3](./MERNQuestion3/user-list/)
8. **RESTful API Design**: Design and implement a REST API in Express.js for a simple blog application with routes for creating, reading, updating, and deleting blog posts.
a. It was done in [MERNQuestion5](./MERNQuestion5/routes/posts.js).

### **Docker**

1. **Basic Dockerfile**: Write a Dockerfile for a Node.js Express application that installs dependencies and runs the server on port 3000.
2. **Docker Compose**: Using Docker Compose, create a configuration file that sets up a multi-container application with a Node.js server and a MongoDB database.
3. **Docker Networking**: Modify the Docker Compose configuration to ensure that the Node.js application can communicate with the MongoDB database via Docker networking.
4. **Containerization**: Explain the advantages of using Docker for deploying a MERN Stack application and provide an example of a real-world use case where Docker enhances development workflows.

### **GitHub/Bitbucket and Version Control**

1. **Basic Git Commands**: Explain the steps and Git commands to initialize a repository, make a commit, and push the code to GitHub.
2. **Branching Strategy**: Describe a common branching strategy (such as GitFlow or feature branching) used in software development teams and how you would implement it for a new feature.
3. **Merging and Resolving Conflicts**: Write a step-by-step guide to resolve a merge conflict when merging a feature branch into the main branch.
4. **CI/CD Integration**: Explain how to set up a basic CI/CD pipeline using GitHub Actions to automatically test and deploy a Node.js application when changes are pushed to the repository.

### **Python for Data Analysis**

1. **Data Cleaning**: Write a Python script that reads a CSV file using Pandas, drops rows with missing values, and outputs the cleaned data.
2. **Data Manipulation**: Using Pandas, write a Python function that takes a DataFrame and returns the top 5 rows where a specific column (e.g., "age") has values greater than 30.
3. **Data Visualization**: Create a bar chart using Matplotlib to visualize the distribution of user ages from a dataset.
4. **Descriptive Statistics**: Using NumPy and Pandas, write a script that calculates the mean, median, and standard deviation of a column (e.g., "age") in a dataset.