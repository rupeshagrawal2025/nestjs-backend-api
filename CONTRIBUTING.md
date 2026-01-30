# Contributing to NestJS Backend API

We welcome contributions to the NestJS Backend API project! By following these guidelines, you can help us maintain the quality and consistency of the codebase.

## How to Contribute

1.  **Fork the Repository**: Start by forking the project repository to your GitHub account.
2.  **Clone Your Fork**: Clone your forked repository to your local machine.
3.  **Create a Branch**: Create a new branch for your feature or bug fix.
4.  **Make Changes**: Implement your changes, adhering to the project's coding style.
5.  **Test Your Changes**: Ensure all existing tests pass and add new tests if necessary.
6.  **Commit Your Changes**: Write clear and concise commit messages.
7.  **Push to Your Fork**: Push your changes to your forked repository.
8.  **Open a Pull Request**: Submit a pull request to the `main` branch of the original repository.

## Reporting Bugs

If you find a bug, please open an issue on the GitHub repository. Provide a clear and concise description of the bug, including:

*   Steps to reproduce the behavior.
*   Expected behavior.
*   Actual behavior.
*   Screenshots or error messages (if applicable).
*   Your environment (Node.js version, OS, etc.).

## Suggesting Enhancements

For feature requests or enhancements, please open an issue on the GitHub repository. Describe the feature, why you think it's important, and how it would benefit the project.

## Development Setup

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/nestBackhandDev.git # Replace with your fork URL
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

To run the application in development mode with hot-reloading:

```bash
npm run start:dev
```

The application will be accessible at `http://localhost:3000`.
Swagger API documentation will be available at `http://localhost:3000/api`.

### Running Tests

To run unit tests:

```bash
npm test
```

To run end-to-end tests:

```bash
npm run test:e2e
```

## Code Style

This project uses Prettier for code formatting and ESLint for linting. Please ensure your code adheres to these standards.

To automatically format your code:

```bash
npm run format
```

To lint your code and fix issues:

```bash
npm run lint
```

## Commit Messages

Please follow a consistent convention for commit messages. A good practice is to use conventional commits (e.g., `feat: Add new user authentication`, `fix: Correct typo in README`).

## Pull Request Process

When submitting a pull request, ensure that:

1.  Your branch is up-to-date with the `main` branch.
2.  All tests pass.
3.  Your code is formatted and linted correctly.
4.  You provide a clear description of your changes in the pull request.

## Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project, you agree to abide by its terms. (You might want to add a link to a specific Code of Conduct if you have one).
