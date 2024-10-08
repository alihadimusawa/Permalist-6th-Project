# Permalist

Permalist is a simple to-do list application that allows users to manage their tasks effectively. Built with Node.js, Express.js, PostgreSQL, and EJS, Permalist provides a user-friendly interface to add, edit, and delete tasks.

## Features

- **Add New Items**: Users can add new tasks to their list.
- **Edit Existing Items**: Users can update the title of existing tasks.
- **Delete Items**: Users can remove tasks from their list.
- **Dynamic Interface**: A responsive design with interactive elements for an optimal user experience.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **PostgreSQL**: Relational database for storing tasks.
- **EJS**: Embedded JavaScript templating engine for rendering views.
- **CSS**: Styling to ensure a clean and modern look.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/permalist.git
   cd permalist
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up PostgreSQL**:
   - Create a database named `permalist`:
     ```sql
     CREATE DATABASE permalist;
     ```
   - Create the `items` table and insert initial data:
     ```sql
     CREATE TABLE items (
       id SERIAL PRIMARY KEY,
       title VARCHAR(100) NOT NULL
     );

     INSERT INTO items (title) VALUES ('Buy milk'), ('Finish homework');
     ```

4. **Run the Application**:
   ```bash
   npm start
   ```
   The application will be running at `http://localhost:3000`.

## Usage

- **Homepage**: Displays all items in the list.
- **Add Item**: Use the input field to add a new task and click the '+' button.
- **Edit Item**: Click the pencil icon to edit the task title.
- **Delete Item**: Check the checkbox to delete a task.

## Contributing

If you have suggestions or improvements, feel free to open an issue or submit a pull request.
