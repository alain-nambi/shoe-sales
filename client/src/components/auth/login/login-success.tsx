import { Alert, AlertDescription, AlertTitle } from "../../ui/alert";
import { CheckCircle } from "lucide-react" 


interface LoginSuccessProps {
    valid: any
}

const LoginSuccess: React.FC<LoginSuccessProps> = ({ valid }) => {
    return (
        <Alert className="border-none bg-emerald-500 text-white flex justify-between items-center">
            <div>
                <AlertTitle>
                    Authentification success
                </AlertTitle>

                <AlertDescription>
                    {valid.message}
                </AlertDescription>
            </div>

            <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4"/>
                <span className="text-sm">
                    {valid.status}
                </span>
            </div>
        </Alert>
    )
}

export default LoginSuccess;