Todo-List App

This is a simple Todo-List app created using Angular 15 and powered by Firebase Firestore as the backend.
Features

    Add and remove tasks from your to-do list
    Mark tasks as completed
    Filter tasks by completed status
    Responsive UI

Getting Started

To get started with the app, follow these steps:

Clone the repository to your local machine using the following command:

    git clone https://github.com/your-username/todo-list-app.git

Navigate into the project directory:

    cd todo-list-app

Install the dependencies:

    npm install

Set up Firebase Firestore backend:

- Create a Firebase project
- Create a new Firestore database
- Go to the project settings, and copy the Firebase configuration
- Open src/environments/environment.ts and replace the Firebase configuration values with your own

Run the app:

    nx serve todo-list

Navigate to http://localhost:4200/ to see the app running

Contributing

If you'd like to contribute to the project, please follow these guidelines:

1. Fork the repository
2. Create a new branch for your feature/bug fix
3. Make your changes and commit them with clear commit messages
4. Push your changes to your forked repository
5. Submit a pull request to the main repository

License

This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgments

Ngx Bootstrap for providing the UI components
Nx.dev Monorepo for helping manage the codebase
Firebase Firestore for providing the backend database
