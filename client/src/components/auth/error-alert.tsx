import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";
import { Terminal } from "lucide-react" 

interface ErrorAlertProps {
    errors: any
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ errors }) => {
    return (
        <Alert className="border-none bg-rose-500 text-white flex justify-between items-center">
            <div>
                <AlertTitle>
                    Authentification failed
                </AlertTitle>

                <AlertDescription>
                    {errors.error.message}
                </AlertDescription>
            </div>

            <div className="flex items-center gap-1">
                <Terminal className="h-4 w-4"/>
                <span className="text-sm">
                    {errors.error.status}
                </span>
            </div>
        </Alert>
    )
} 

export default ErrorAlert