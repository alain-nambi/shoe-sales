import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./product.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import SkeletonProductItem from "./skeleton-product-item";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useMediaQuery } from "react-responsive";

interface ProductProps {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
}

const ProductItem: React.FC<{ product: ProductProps }> = ({ product }) => (
    <div className={styles.product__content} key={product.id}>
        <div className={styles.product__imagerPlaceHolder}>
            <LazyLoadImage
                effect="opacity"
                className={styles.product__image}
                src={product.image}
                alt={product.title}
            />
        </div>
        <div className="h-30 flex flex-col justify-between">
            <div className="mb-3">
                <p className={styles.product__title} title={product.title}>{product.title}</p>
                <p className={styles.product__category}>{product.category}</p>
            </div>
            <div className="self-end">
                <span className={styles.product__price}>${product.price}</span>
            </div>
        </div>
    </div>
);

const Product: React.FC = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

    const [products, setProducts] = useState<ProductProps[]>([]);
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_FAKE_STORE_API_URL}/products`);
            // Fake loading effect
            // setTimeout(() => {
            //     setProducts(response?.data);
            //     setLoading(false)
            // }, 120000)
            setProducts(response?.data);
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            {loading ? (
                <SkeletonProductItem />
            ) : products.length > 0 ?
                (
                    <section className="mt-4">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                            spaceBetween={10}
                            slidesPerView={isMobile ? 1 : isTablet ? 3 : 4}
                            navigation={isDesktop}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            autoplay={{delay: 3000, disableOnInteraction:false}}
                            className="flex justify-center items-center flex-1"
                        >
                            {products.map((product) => (
                                <SwiperSlide key={product.id} className="mb-10">
                                    <ProductItem product={product} key={product.id} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </section>
                ) : (
                    <p>Aucun produit n'a été trouvé</p>
                )}
        </>
    );
};

export default Product;