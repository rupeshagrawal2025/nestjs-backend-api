# NestJS Backend API

This project is a RESTful API built with NestJS, featuring User CRUD operations, validation, and role-based access control. It uses TypeORM for database interactions with an in-memory SQLite database and Swagger for API documentation.

## Project Structure

The project follows a standard NestJS structure:

```
src/
├── app.module.ts       # The root module of the application
├── main.ts             # The application entry file which uses NestFactory to create a Nest application instance
├── common/             # Shared modules, classes, and utilities
│   ├── decorators/
│   ├── guards/
│   └── middleware/
└── users/              # Users feature module
    ├── users.controller.ts # Handles incoming requests and returns responses
    ├── users.service.ts    # Contains the business logic
    ├── users.module.ts     # Encapsulates everything related to the users feature
    ├── dto/                # Data Transfer Objects for request body validation
    └── entities/           # TypeORM entity for the user
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd nestBackhandDev
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

-   **Development mode with watch:**
    ```bash
    npm run start:dev
    ```
    The application will be running on `http://localhost:3000`.

-   **Production mode:**
    ```bash
    npm run build
    npm run start:prod
    ```

## API Documentation

Once the application is running, the Swagger documentation is available at `http://localhost:3000/api`.

The documentation provides detailed information about the available endpoints, request bodies, and response schemas.

## API Endpoints

All endpoints are prefixed with `/users`.

| Method  | Endpoint      | Description                                | Roles
| :------ | :------------ | :----------------------------------------- | :-------------------
| `POST`  | `/`           | Create a new user                          | (Public)
| `GET`   | `/`           | Get a list of all users                    | (Public)
| `GET`   | `/:id`        | Get a single user by their ID              | (Public)
| `PATCH` | `/:id`        | Update a user's details                    | `Admin`, `Moderator`
| `DELETE`| `/:id`        | Delete a user                              | `Admin`

## Available Scripts

-   `npm run start`: Start the application.
-   `npm run start:dev`: Start the application in watch mode.
-   `npm run build`: Build the application for production.
-   `npm run format`: Format the code using Prettier.
-   `npm run lint`: Lint the code using ESLint.
-   `npm test`: Run unit tests.
-   `npm run test:e2e`: Run end-to-end tests.
