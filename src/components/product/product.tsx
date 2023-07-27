import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./product.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
}

const SkeletonProductItem: React.FC<{ count: number }> = ({ count }) => {
    const skeletons = Array.from({ length: count }, (_, index) => (
        <div className={styles.product__content} key={index}>
            <div className={styles.product__imagerPlaceHolder_Skeleton}></div>
            <div className={styles.skeleton__container}>
                <div className="mb-3">
                    <p className={styles.product__title_Skeleton}></p>
                    <p className={styles.product__category_Skeleton}></p>
                </div>
                <div className={styles.product__price_Skeleton}></div>
            </div>
        </div>
    ));

    return <>{skeletons}</>;
};

const ProductItem: React.FC<{ product: Product }> = ({ product }) => (
    <div className={styles.product__content} key={product.id}>
        <div className={styles.product__imagerPlaceHolder}>
            <LazyLoadImage
                effect="opacity"
                className={styles.product__image}
                src={product.image}
                alt={product.title}
            />
        </div>
        <div>
            <div className="mb-3">
                <p className={styles.product__title}>{product.title}</p>
                <p className={styles.product__category}>{product.category}</p>
            </div>
            <span className={styles.product__price}>{product.price}</span>
        </div>
    </div>
);

const Product: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const isMobile = useMediaQuery({ maxWidth: 767 });
    //   const isDesktop = useMediaQuery({ minWidth: 992 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_FAKE_STORE_API_URL}/products`);
                
                // Simulate bad network
                setInterval(() => {
                    setProducts(response?.data);
                }, 5000)

            } catch (error) {
                console.log(error);
            }
        };

        getProducts();
    }, []);

    return (
        <section className={styles.product__container}>
            {products.length > 0 ? (
                <>
                    {products.map((product) => (
                        <ProductItem product={product} key={product.id} />
                    ))}
                </>
            ) : (
                <>
                    {isMobile ? (
                        <SkeletonProductItem count={4} />
                    ) : isTablet ? (
                        <SkeletonProductItem count={6} />
                    ) : (
                        <SkeletonProductItem count={8} />
                    )}
                </>
            )}
        </section>
    );
};

export default Product;