import { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {
  Home,
  Info,
  Phone,
  ShoppingBag,
  GalleryVerticalEnd,
  Minimize2,
  LogIn,
  UserPlus2,
} from "lucide-react";

import styles from "./navbar.module.css"

const NavBar: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  const navItemsDesktop = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: Info },
    { href: "/category", label: "Category", icon: ShoppingBag },
    { href: "/contact", label: "Contact", icon: Phone },
  ];

  const navItemsMobile = [
    ...navItemsDesktop,
    { href: "/login", label: "Login", icon: LogIn },
    { href: "/sign-up", label: "Sign Up", icon: UserPlus2 },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation bar */}
      <nav className="flex justify-between items-center py-3">
        {/* Logo */}
        <div
          className={`flex justify-between items-center ${
            isMobile ? "w-full" : ""
          }`}
        >
          <div className="text-base text-orange-500 font-black">
            <span className="cursor-pointer">Logo</span>
          </div>

          {/* Navigation buttons for mobile devices */}
          {/* Ajouter les boutons de navigation pour les mobiles */}
          {isMobile && (
            <Button
              className={`${styles.buttonPrimary}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              title={`${
                isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"
              }`}
            >
              {isMobileMenuOpen ? (
                <Minimize2 size={20} />
              ) : (
                <GalleryVerticalEnd size={20} />
              )}
            </Button>
          )}
        </div>

        {/* Navigation link */}
        {/* Affiche les liens de navigation sauf sur les appareils mobiles */}
        {!isMobile && (
          <ul className="flex gap-5 text-sm cursor-pointer">
            {navItemsDesktop.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                classname={"hover:text-orange-500"}
              >
                {item.label}
              </NavItem>
            ))}
          </ul>
        )}

        {/* Mobile navigation */}
        {/* Affiche les liens de navigation sur les appareils mobiles */}
        {isMobile && isMobileMenuOpen && (
          <div className={styles.menuMobile__container}>
            <ul className={styles.menuMobile__content}>
              {navItemsMobile.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  classname={styles.menuMobile__list}
                >
                  <item.icon size={17} />
                  {item.label}
                </NavItem>
              ))}
            </ul>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex items-center gap-2">
          {/* Ne pas afficher les boutons de navigations en version mobile */}
          {!isMobile && (
            <>
              <Button className={styles.buttonPrimary}>Login</Button>
              <Button className={styles.buttonSecondary}>Signup</Button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  classname: string | "";
}

const NavItem: React.FC<NavItemProps> = ({ href, children, classname }) => {
  return (
    <li>
      <Link to={href} className={`${classname}`}>
        {children}
      </Link>
    </li>
  );
};

export default NavBar;
