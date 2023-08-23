import NavBar from "../navbar/navbar/navbar"
import Banner from "../navbar/banner/banner"
import Login from "../auth/login/login"
import SignUp from "../auth/signup/signup"

import SkeletonProductItem from "../product/skeleton-product-item"

import {lazy, Suspense, useState} from "react"

const Product = lazy(() => import("../product/product"))

const HomeComponent: React.FC = () => {
    const [isOpenLogin, setIsOpenLogin] = useState(false);
    const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  
    const handleOpenLoginForm = () => {
      setIsOpenLogin(!isOpenLogin)
      setIsOpenSignUp(false)
    }
  
    const handleOpenSignUpForm = () => {
      setIsOpenSignUp(!isOpenSignUp)
      setIsOpenLogin(false)
    }
 
    return (
        <>
            <NavBar 
                handleOpenSignUpForm={handleOpenSignUpForm} 
                handleOpenLoginForm={handleOpenLoginForm} 
            />
            <Banner />
            {isOpenLogin && 
                <Login 
                    handleOpenLoginForm={handleOpenLoginForm} 
                    isOpenLogin={isOpenLogin}
                />
            }
            {isOpenSignUp && 
                <SignUp 
                    handleOpenSignUpForm={handleOpenSignUpForm} 
                    isOpenSignUp={isOpenSignUp}
                />
            }
            <div>
                <p className="mt-4 font-bold max-sm:text-base md:text-lg max-sm:text-center"> Nouvelles arrivages</p>
            </div>
            <Suspense fallback={<SkeletonProductItem />}>
                <Product />
            </Suspense>
        </>
    )
}

export default HomeComponent