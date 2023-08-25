import { Button } from "../../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogTrigger
} from "../../ui/dialog"
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

import * as yup from 'yup';
import { useFormik } from "formik";

import styles from "./login.module.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import LoginError from "./login-error";
import LoginSuccess from "./login-success";
 
interface LoginProps {
    isOpenLogin: boolean
    handleOpenLoginForm: () => void
}

const Login: React.FC<LoginProps> = ({ handleOpenLoginForm, isOpenLogin }) => {
    const navigate = useNavigate()

    const [isLogged, setIsLogged] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .email("Enter a valid email")
            .required("Email Required"),
        password: yup
            .string()
            .required("Password Required")
    })

    const onSubmit = async (values: any, actions: any) => {
        setIsLoading(true)
        const { email, password } = values

        try {
            // Make an API request to the `/api/v1/users/login` endpoint.
            const response = await axios.post("api/v1/users/login", {
              email: email,
              password: password
            });
          
            // Check the status code of the API response.
            if (response.status === 200) {
                // The login was successful.
                // Set the `valid` state with the success message from the API response.
                actions.setValues({
                    email: email,
                    password: password,
                    valid: {
                        message: response.data.message,
                        status: `${response.status} ${response.statusText}`
                    }
                });

                // Set the `isLogged` state to true.
                setIsLogged(true);

                setTimeout(() => {
                    // Set the `isLoading` state to false.
                    setIsLoading(false);
                }, 600);
            } else {
                // The login failed.
                // Set the `valid` state with the error message from the API response.
                actions.setValues({
                    email: email,
                    password: password,
                    valid: {
                        message: response.data.message,
                        status: `${response.status} ${response.statusText}`
                    }
                });
            }
        } catch (error: any) {
            // An error occurred during the API request.
            // Check the status code of the error object.
            if (error.response.status === 401) {
                // The user is not logged in.
                // Set the `submitting` state to false.
                actions.setSubmitting(false);
                // Reset the form.
                actions.resetForm();

                // Set the `errors` state with the error message from the API response.
                actions.setErrors({
                    error: {
                        message: error.response.data.message,
                        status: `${error.response.status} ${error.response.statusText}`
                    }
                });
            } else {
                // An unexpected error occurred.
                // Log the error message.
                console.log(error);

                // Set the `errors` state with the error message from the error object.
                actions.setErrors({
                    error: {
                        message: error.message,
                        status: error.response.status
                    }
                });
            }

            // Set the `isLoading` state to false.
            setIsLoading(false);
            // Set the `isLogged` state to false.
            setIsLogged(false);
        }
    }

    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
            email: "",
            password: "",
            error: {
                message: "",
                status: ""
            },
            valid: {
                message: "",
                status: ""
            }
        },
        validationSchema: validationSchema,
        onSubmit,
    });

    return (
        <Dialog defaultOpen={isOpenLogin} onOpenChange={handleOpenLoginForm}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">
                        Sign in to your account
                    </DialogTitle>
                    <DialogDescription>
                        Enter your email address and password to continue.
                    </DialogDescription>
                </DialogHeader>

                {!isSubmitting && errors.error && !isLogged && (
                    <LoginError errors={errors} />
                )}

                {!isSubmitting && isLogged && (
                    <LoginSuccess valid={values.valid} />
                )}
            
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="eg: alice@wonderland.com"
                                className={errors.email && touched.email ? styles.emailError : ""}
                            />
                            {errors.email && touched.email && <p className="text-rose-600 text-sm">{errors.email}</p>}
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="eg: alice123"
                                className={errors.password && touched.password ? styles.emailError : ""}
                            />
                            {errors.password && touched.password && <p className="text-rose-600 text-sm">{errors.password}</p>}
                        </div>

                        <Button 
                            disabled={isSubmitting} 
                            type="submit" 
                            className="button__primary w-full"
                        >
                            {isSubmitting || isLoading ? "Loading..." : "Log in"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default Login;