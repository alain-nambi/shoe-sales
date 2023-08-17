### Usage

The specific usage of each package is documented in the following sections.

#### LazyLoad

To use LazyLoad, you need to import the LazyLoad component and wrap your images in it. For example:

```js
import React from 'react';
import LazyLoad from 'lazyload';

export const ComponentExample = () => {
  render() {
    return (
      <LazyLoad>
        <img src="image.jpg" />
      </LazyLoad>
    );
  }
}
```