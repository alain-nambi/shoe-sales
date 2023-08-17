#### User model

The User model is defined in the models/user.js file. The following code snippet shows how to define the model:

```js
const { Sequelize } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return User;
};
```

The `User` model has the following fields:


`id`: The unique identifier for the user.<br>
`name`: The name of the user. <br>
`email`: The email address of the user. <br>
`password`: The password of the user. <br>