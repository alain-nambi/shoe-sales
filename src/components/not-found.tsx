import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const NotFound: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-2rem)]">
            <div className="flex flex-col gap-3 items-center">
                <div className="text-sm flex items-center gap-3">
                    <div className="text-xl border-r-[1px] border-sky-950 pr-5 font-semibold h-12 flex items-center">
                        404
                    </div>
                    <span className="pl-2">La page visitée n'existe pas</span>
                    
                </div>
                <Link to="/home" className="ml-2">
                    <Button className="bg-orange-500 hover:bg-orange-400">
                        Revenir à l'accueil
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;