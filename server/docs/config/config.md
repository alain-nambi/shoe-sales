The connection to PostgreSQL is configured in the config.js file. The following code snippet shows how to configure the connection:

```js
const { sequelize } = require('./models');

const config = {
  database: 'my_database',
  username: 'my_username',
  password: 'my_password',
  host: 'localhost',
  port: 5432,
};

sequelize.connect(config);
```