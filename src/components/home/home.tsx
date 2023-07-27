import NavBar from "../navbar/navbar/navbar"
import Banner from "../navbar/banner/banner"

import SkeletonProductItem from "../product/skeleton-product-item"

import {lazy, Suspense} from "react"

const Product = lazy(() => import("../product/product"))

const Home: React.FC = () => {
    return (
        <>
            <NavBar />
            <Banner />
            <div>
                <p className="mt-4 font-bold max-sm:text-base md:text-lg max-sm:text-center"> Nouvelles arrivages</p>
            </div>
            <Suspense fallback={<SkeletonProductItem />}>
                <Product />
            </Suspense>
        </>
    )
}

export default Home