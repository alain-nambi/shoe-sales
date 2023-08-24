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
 
interface LoginProps {
    isOpenLogin: boolean
    handleOpenLoginForm: () => void
}

const Login: React.FC<LoginProps> = ({ handleOpenLoginForm, isOpenLogin }) => {
    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .email("Enter a valid email")
            .required("Email Required"),
        password: yup
            .string()
            .min(6, "Password must be at least 6 characters")
            .required("Password Required")
    })

    const onSubmit = async (values: any, actions: any) => {
        console.log(values);
        console.log(actions);
        actions.resetForm()
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
                            Log in
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default Login;