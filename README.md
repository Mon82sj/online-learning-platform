# Online Learning Platform

This project is developed as part of the **Naan Mudhalvan** program, specifically for the course on MERN Stack (subject code: **NM1042**). The platform provides a comprehensive digital learning environment for students and instructors, built using the **MERN** (MongoDB, Express, React, Node.js) stack.

---

## Project Team
**Team ID:** NM2024TMID02141

|S.No.| Name             | Register Number | Program ID                          |
|-----|------------------|-----------------|-------------------------------------|
| 01  | **Monica G**     | 412721104028    | 1C1EFBBA6904C668C8C4FED80E1D85A7    |  
| 02  | **Jayashri A**   | 412721104016    | 1514D2A08C56DD0A7EF49A01FDE5242A    |
| 03  | **Aakash D**     | 412721104001    | 2642B0426B4DBEDBA0C418C7F7261DFB    |
| 04  | **Sourav Anand N** | 412721104048 | 1A9C4E316076016B4744B98C284D15BC    |

> **Note:** We are students of the Computer Science and Engineering department of **Tagore Engineering College** (College code: 4127) in our 7th semester.

---

## Project Description

**Project Name:** Online Learning Platform Using MERN

This online learning platform aims to boost student engagement and facilitate effective interaction between students and instructors through a user-friendly and feature-rich web interface. Key features include:

- **Course Enrollment**: Students can enroll in available courses.
- **Educational Content Access**: Students and instructors have access to relevant course material.
- **Forum Discussions**: Instructors and students can interact through forums.
- **Profile Management**: Users can manage their profiles and settings.

Built on the **MERN** stack, the platform ensures seamless user experience, secure data handling, and efficient performance.

**Project Report:** [Link to Full Project Report (PDF)](link-to-your-report)

---

## Steps to Run the Application Locally

To set up the application on your local machine, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/Mon82sj/online-learning-platform.git
```

### 2. Navigate to the Cloned Repository
   ```bash
   cd online-learning-platform
```

### 3. Configure Environment Variables

- Rename the .env.local1 file in the client folder to .env.local.
- Update the necessary environment variables in the .env.local file.

### 4. Setting up the Frontend

- Open a new terminal in VS Code.
- Run the following commands to install dependencies and start the frontend:

```bash
cd client
npm install   # Install the required packages
npm run dev   # Start the frontend server
```

- Access the frontend at http://localhost:5173.

### 5. Setting up the Backend

- In a separate terminal, navigate to the server folder:

```bash
cd server
```

- Run the following commands to install dependencies and start the backend server:

```bash
npm install      # Install the required packages
node server.js   # or use nodemon for automatic restarts with `nodemon server.js`
```
- The backend server will run on PORT 5000 by default. Update the port in the .env file if necessary.

### Technologies Used

- **Frontend** : React, HTML, CSS, JavaScript, Bootstrap, Vite
- **Backend** : Node.js, Express.js
- **Database** : MongoDB
- **Authentication** : JSON Web Tokens (JWT)
- **Environment Management** : dotenv

### Additional Information

- For questions or assistance, feel free to reach out to any of the team members listed above or view their GitHub profiles in the collaborators section of this repository.
