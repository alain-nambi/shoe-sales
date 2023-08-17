### TODO List for REST API with Node.js, Sequelize, and PostgreSQL

1. Install the necessary dependencies:
    * Node.js
    * Sequelize
    * PostgreSQL

2. Create a new project:
    * `mkdir my-project`
    * `cd my-project`

3. Initialize a Node.js project:
    * `npm init -y`

4. Install Sequelize:
    * `npm install sequelize`

5. Create a database:
    * `psql -U postgres`
    * `CREATE DATABASE my_database;`

6. Configure Sequelize:
    * Create a `config.json` file in the root of your project.
    * Example:
        ```
        {
          "database": "my_database",
          "username": "postgres",
          "password": "",
          "host": "localhost",
          "port": 5432
        }
        ```

7. Create a model:
    * `sequelize model:generate --name Todo --attributes title:string description:string`

8. Create a migration:
    * `sequelize migration:generate --name create_todos`

9. Run the migration:
    * `sequelize migration:run`

10. Create a controller:
    * `mkdir controllers`
    * `touch controllers/todos.js`

11. Create a route:
    * `app.get("/todos", (req, res) => {
        // Get all todos from the database.
        const todos = await Todo.findAll();

        // Send the todos to the client.
        res.json(todos);
    });`

12. Start the server:
    * `node server.js`

13. Create Models and Migrations
    * [Models and Migrations](../server/docs/models_and_migrations.md)