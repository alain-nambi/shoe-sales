import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from "../../ui/dialog"
import { useFormik } from "formik";
import * as yup from "yup"

import styles from "./signup.module.css"
import { useState } from "react";
import axios from "axios";
import SuccessAlert from "../success-alert";
import ErrorAlert from "../error-alert";

interface SignUpProps {
    isOpenSignUp: boolean
    handleOpenSignUpForm: () => void
}

const SignUp: React.FC<SignUpProps> = ({ handleOpenSignUpForm, isOpenSignUp }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isUserCreated, setIsUserCreated] = useState(false) 

    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .email("Enter a valid email")
            .required("Email Required"),
        password: yup
            .string()
            .required("Password Required"),
        firstname: yup
            .string()
            .required("Firstname Required"),
        lastname: yup
            .string()
            .required("Lastname Required"),
    })

    const onSubmit = async (values: any, actions: any) => {
        setIsLoading(true)
        const { email, password, firstname, lastname } = values
        
        try {
            const response = await axios.post("api/v1/users/create", {
                email: email,
                password: password,
                firstName: firstname,
                lastName: lastname
            })

            if (response.status === 201) {
                // user is created successfully
                actions.setValues({
                    email: email,
                    password: password,
                    firstname: firstname,
                    lastname: lastname,
                    valid: {
                        message: response.data.message,
                        status: `${response.status} ${response.statusText}`
                    }
                })
                setIsUserCreated(true)
                setIsLoading(false)
            } else {
                actions.setValues({
                    email: email,
                    password: password,
                    firstname: firstname,
                    lastname: lastname,
                    valid: {
                        message: response.data.message,
                        status: `${response.status} ${response.statusText}`
                    }
                })
            }
        } catch (error: any) {
            if (error.response.status === 500) {
                actions.setSubmitting(false)
                actions.resetForm()
                actions.setErrors({
                    error: {
                        message: error.response.data.message,
                        status: `${error.response.status} ${error.response.statusText}`
                    }
                })
            } else {
                // An unexpected error occurred.
                // Log the error message.
                console.log(error);
                actions.setErrors({
                    error: {
                        message: error.message,
                        status: error.response.status
                    }
                });
            }

            setIsLoading(false);
            setIsUserCreated(false);
        }

        // console.log(values)
        // console.log(actions)

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
            firstname: "",
            lastname: "",
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
        <Dialog defaultOpen={isOpenSignUp} onOpenChange={handleOpenSignUpForm}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">
                        Create an account
                    </DialogTitle>
                    <DialogDescription>
                        Fill out the form below to create an account and start using our service.
                    </DialogDescription>
                </DialogHeader>

                {!isSubmitting && errors.error && (
                    <ErrorAlert errors={errors} />
                )}

                {!isSubmitting && isUserCreated && (
                    <SuccessAlert valid={values.valid} />
                )}

                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2"> 
                            <Label htmlFor="firstname">Firstname</Label>
                            <Input 
                                type="text" id="firstname" 
                                placeholder="eg: Alice" 
                                value={values.firstname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.firstname && touched.firstname ? styles.errorRing : ""}
                            />
                            {errors.firstname && touched.firstname && <p className="text-rose-600 text-sm">{errors.firstname}</p>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="lastname">Lastname</Label>
                            <Input 
                                type="text" 
                                id="lastname" 
                                placeholder="eg: Wonderland"
                                value={values.lastname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.lastname && touched.lastname ? styles.errorRing : ""}
                            />
                            {errors.lastname && touched.lastname && <p className="text-rose-600 text-sm">{errors.lastname}</p>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input 
                                type="email" 
                                id="email" 
                                placeholder="eg: alice@wonderland.com" 
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.email && touched.email ? styles.errorRing : ""}
                            />
                            {errors.email && touched.email && <p className="text-rose-600 text-sm">{errors.email}</p>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input 
                                type="password" 
                                id="password" 
                                placeholder="eg: alice123" 
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.password && touched.password ? styles.errorRing : ""}
                            />
                            {errors.password && touched.password && <p className="text-rose-600 text-sm">{errors.password}</p>}
                        </div>
                    </div> 

                    <div className="flex gap-2 mt-4">
                        <DialogTrigger asChild>
                            <Button type="button" className="button__secondary w-full">
                                Cancel
                            </Button>
                        </DialogTrigger>
                        <Button 
                            disabled={isSubmitting}
                            type="submit" 
                            className="button__primary w-full"
                        >
                            {isSubmitting || isLoading ? "Creating user..." : "Register"}
                        </Button>
                    </div>
                </form>

                
            </DialogContent>
        </Dialog>
    )
}

export default SignUp;