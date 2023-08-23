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

interface LoginProps {
    isOpenLogin: boolean
    handleOpenLoginForm: () => void
}

const Login: React.FC<LoginProps> = ({ handleOpenLoginForm, isOpenLogin }) => {
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

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="eg: alice@wonderland.com" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" placeholder="eg: alice123" />
                    </div>
                </div>

                <DialogFooter>
                    <Button type="submit" className="button__primary w-full">Log in</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default Login;