To use Yup, and Formik for making a post request to a Nodejs API REST, you can follow these steps:

Install the Shadcn Input, Yup, and Formik packages.
npm install shadcn-input yup formik
Create a React component that uses Yup, and Formik.

```js
import React, { useState } from "react";
import ShadcnInput from "shadcn-input";
import Yup from "yup";
import Formik from "formik";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().minLength(6).required(),
  });

  const formik = Formik({
    initialValues: {
      email,
      password,
    },
    validationSchema,
    onSubmit: async (values) => {
      // Make a post request to the Nodejs API REST.
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.status === 200) {
        // The user has been authenticated successfully.
        // You can redirect the user to the home page.
      } else {
        // The user has not been authenticated successfully.
        // You can display an error message.
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        label="Email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        label="Password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
```

This is just a simple example, and you will need to customize it to fit your specific needs. However, it should give you a good starting point for using Shadcn Input, Yup, and Formik for making a post request to a Nodejs API REST.