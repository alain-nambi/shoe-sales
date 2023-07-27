import NavBar from "../navbar/navbar/navbar"
import Banner from "../navbar/banner/banner"
import Product from "../product/product"

const Home: React.FC = () => {
    return (
        <>
            <NavBar />
            <Banner />
            <Product />
        </>
    )
}

export default Home