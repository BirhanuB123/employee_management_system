# Employee Management System

A full-stack Employee Management System built with the MERN stack (MongoDB, Express, React, Node.js).

## Features
- **Create**: Add new employees with detailed information.
- **Read**: View list of all employees in a responsive table.
- **Update**: Edit existing employee details.
- **Delete**: Remove employees from the system.
- **Responsive Design**: Built with React and TailwindCSS for mobile-friendly usage.

## Tech Stack
- **Frontend**: React (Vite), TailwindCSS, Axios, React Router.
- **Backend**: Node.js, Express.js, MongoDB (Mongoose).

## Getting Started

### Prerequisites
- Node.js installed.
- MongoDB installed and running locally on port 27017.

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/BirhanuB123/Syntecxhub_employee_management.git
    cd employee_management_system
    ```

2.  **Install Backend Dependencies**:
    ```bash
    cd server
    npm install
    ```
    Create a `.env` file in the `server` folder:
    ```
    MONGO_URI=mongodb+srv://birhanu1b_db_user:**password**@cluster0.rlxwgjj.mongodb.net/?appName=Cluster0
    PORT=5000
    ```

3.  **Install Frontend Dependencies**:
    ```bash
    cd ../client
    npm install
    # Important: If using TailwindCSS v4, ensure you install the postcss plugin:
    npm install @tailwindcss/postcss
    ```

### Running the Application

1.  **Start the Backend**:
    From the `server` directory:
    ```bash
    npm run dev
    ```
    Server runs on: [http://localhost:5000](http://localhost:5000)

2.  **Start the Frontend**:
    From the `client` directory:
    ```bash
    npm run dev
    ```
    Frontend runs on: [http://localhost:5173](http://localhost:5173)

