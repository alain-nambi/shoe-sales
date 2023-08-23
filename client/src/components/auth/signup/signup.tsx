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

interface SignUpProps {
    isOpenSignUp: boolean
    handleOpenSignUpForm: () => void
}

const SignUp: React.FC<SignUpProps> = ({ handleOpenSignUpForm, isOpenSignUp }) => {
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

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2"> 
                        <Label htmlFor="firstname">Firstname</Label>
                        <Input type="text" id="firstname" placeholder="eg: Alice" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="lastname">Lastname</Label>
                        <Input type="text" id="lastname" placeholder="eg: Wonderland" />
                    </div>
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
                    <DialogTrigger asChild>
                        <Button type="button" className="button__secondary w-full">
                            Cancel
                        </Button>
                    </DialogTrigger>
                    <Button type="submit" className="button__primary w-full">
                        Register
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default SignUp;