# Node.js TaskApp Backend
## This is the backend server for a TaskApp application developed using Node.js. It provides an API for managing tasks and users.

### Features
- User authentication and authorization using JSON Web Tokens (JWT).
- CRUD operations for managing tasks.
- User registration and login functionality.
  - User registration with email verification.
  - Password reset feature.
- Secure password storage using bcrypt hashing algorithm.

### Prerequisites
Before running the server, make sure you have the following installed:

1. Node.js (v12 or higher)
2. MongoDB (local or remote)
## Getting Started
1. Clone the repository:
```bash
git clone https://github.com/your-username/Node.js_TaskApp-backend.git
```
2. Install the dependencies:
```bash
cd Node.js_TaskApp-backend
npm install
```
3. Set up environment variables:
```bash
PORT=3000
SMTP_PASS=
SMTP_USER=
MONGOOSE_URL=mongodb+srv:// your url
JWT_TOKEN=some token (eg:drinkhotwater)
```

Create a .env file in the root directory and provide the following variables:
4. Start the server:
```npm run dev```

## API Endpoints

- **User Endpoints:**

  - `POST /users` - Register a new user
  - `POST /users/login` - Login and generate a JWT token
  - `POST /users/logout` - Logout and invalidate the JWT token
  - `POST /users/logoutAll` - Logout from all devices
  - `POST /users/me/avatar` - Upload a user avatar image
  - `DELETE /users/me/avatar` - Delete the user avatar image

- **Task Endpoints:**

  - `POST /tasks` - Create a new task
  - `GET /tasks` - Get all tasks
  - `GET /tasks/:id` - Get a specific task
  - `PATCH /tasks/:id` - Update a specific task
  - `DELETE /tasks/:id` - Delete a specific task

For detailed documentation of each endpoint and request/response examples, please refer to the API documentation provided with this repository.

## Contributing
If you want to contribute to this project, you can follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Make your changes and commit them.
4. Push the changes to your fork.
5. Submit a pull request to the main repository.

### Contact
If you have any questions or suggestions, feel free to contact me.