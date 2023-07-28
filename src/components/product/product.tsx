import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./product.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import SkeletonProductItem from "./skeleton-product-item";

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
                    <section className={styles.product__container}>
                        {products.map((product) => (
                            <ProductItem product={product} key={product.id} />
                        ))}
                    </section>
                ) : (
                    <p>Aucun produit n'a été trouvé</p>
                )}
        </>
    );
};

export default Product;