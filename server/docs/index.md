
Sure, here are some usage examples for routes, util, and index.js (main) in a Node.js application:

### Index.js (main)

The index.js file in a Node.js application is the main file for the application. This file is responsible for starting the application and routing requests to the appropriate endpoints.

Here is an example of an index.js file:

```js
const express = require('express');
const app = express();
const router = require('./routes');

app.use(router);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

```

This file will start the application on port 3000 and route requests to the routes directory.