### Installation

To install the required dependencies, you can use the following command:

```bash
npm i express pg sequelize
```

This will install the Express, PostgreSQL, and Sequelize packages.

> Don't forgot to install `Nodemon`

`Nodemon` is a utility depended on about 3 million projects, that will monitor for any changes in your source and automatically restart your server. Perfect for development.

Swap nodemon instead of node to run your code, and now your process will automatically restart when your code changes. To install, get Node.js, then from your terminal run:

```bash
npm install -g nodemon
```

### Architecture

The application is structured in the following directories:

| Directory Architecture                       | Description                        |
|----------------------------------------------|------------------------------------|
| [config](../server/docs/config/config.md)           | This directory contains the config for the application to rely with database  |
| [controllers](../server/docs/controllers/userController.md) | This directory contains the controllers for the application  |
| [models](../server/docs/models/userModel.md)           | This directory contains the models for the application  |
| [routes](../server/docs/routes.md)           | This directory contains the routes for the application  |
| [util](../server/docs/util.md)               | This directory contains the utility functions for the application.
Connection to PostgreSQL  |