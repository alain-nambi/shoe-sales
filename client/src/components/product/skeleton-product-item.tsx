import styles from "./product.module.css"

import { useMediaQuery } from "react-responsive";

const SkeletonProductItem: React.FC = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    //   const isDesktop = useMediaQuery({ minWidth: 992 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

    const count:number = isMobile ? 1 : isTablet ? 3 : 4;

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

    return (
        <section className={styles.product__container}>
            {skeletons}
        </section>
    );
};

export default SkeletonProductItem;