#### React Router

To use React Router, you need to import the react-router-dom package and use the Route component to define your routes

```js
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class MyComponent extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    );
  }
}
```