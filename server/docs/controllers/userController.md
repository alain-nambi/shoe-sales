#### Users controller

The Users controller is defined in the controllers/users.js file. The following code snippet shows how to define the controller:

```js
const { User } = require('../models/user');

module.exports = {
  getAllUsers: async (req, res) => {
    const users = await User.findAll();
    res.json(users);
  },
  createUser: async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.json(user);
  },
  getUser: async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    res.json(user);
  },
  updateUser: async (req, res) => {
    const id = req.params.id;
    const { name, email, password } = req.body;
    const user = await User.update({ name, email, password }, { where: { id } });
    res.json(user);
  },
  deleteUser: async (req, res) => {
    const id = req.params.id;
    await User.destroy({ where: { id } });
    res.json({ message: 'User deleted successfully' });
  },
};
```

The Users controller has the following methods:

`getAllUsers`: This method gets all users from the database. <br>
`createUser`: This method creates a new user in the database. <br>
`getUser`: This method gets a user by their ID from the database. <br>
`updateUser`: This method updates a user in the database. <br>
`deleteUser`: This method deletes a user from the database. <br>
