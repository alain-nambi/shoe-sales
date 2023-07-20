import { Button } from "../ui/button"

const NavBar: React.FC = () => {
    return (
        <>
            {/* Navigation bar */}
            <nav className="flex justify-between items-center py-3">
                {/* Logo */}
                <div className="text-base text-orange-500 font-black">
                    <span className="cursor-pointer">Logo</span>
                </div>
                {/* Navigation link */}
                <ul className="flex gap-5 text-sm cursor-pointer">
                    <NavItem href="/home">Home</NavItem>
                    <NavItem href="/about">About</NavItem>
                    <NavItem href="/category">Category</NavItem>
                    <NavItem href="/contact">Contact</NavItem>
                </ul>
                {/* Navigation buttons */}
                <div className="flex items-center gap-2">
                    <Button className="bg-orange-500 hover:bg-orange-400">Login</Button>
                    <Button 
                        className="
                            border-orange-500 
                            border bg-transparent 
                            hover:border-orange-400 
                            text-orange-500 
                            hover:bg-transparent 
                            hover:text-orange-400
                        "
                    >
                        Signup
                    </Button>
                </div>
            </nav>
        </>
    )
}

interface NavItemProps {
    href: string,
    children: React.ReactNode
}

const NavItem: React.FC<NavItemProps> = ({href, children}) => {
    return (
        <li>
            <a href={href} className="hover:text-orange-500">{children}</a>
        </li>
    )
}

export default NavBar