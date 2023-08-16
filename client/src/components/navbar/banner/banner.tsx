import { Link } from "react-router-dom"
import { Button } from "../../ui/button";

import styles from "./banner.module.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Pagination, Scrollbar, A11y } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner: React.FC = () => {
    
    return (
            <Swiper
                modules={[Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide className="mb-10">
                    <section className={styles.banner}>
                        <div className={styles.banner__content}>
                            <h1 className={styles.banner__title}>
                                Découvrez notre collection exclusive
                            </h1>
                            <p className={styles.banner__subtitle}>
                                Trouvez les produits parfaits pour vous
                            </p>
                            <Link to="/category">
                                <Button className={`button__primaryOutline ${styles.banner__button}`}>
                                    Découvrir maintenant                            
                                </Button>
                            </Link>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                    <section className={styles.banner}>
                        <div className={styles.banner__content}>
                            <h1 className={styles.banner__title}>
                                Découvrez notre collection exclusive
                            </h1>
                            <p className={styles.banner__subtitle}>
                                Trouvez les produits parfaits pour vous
                            </p>
                            <Link to="/category">
                                <Button className={`button__primaryOutline ${styles.banner__button}`}>
                                    Découvrir maintenant                            
                                </Button>
                            </Link>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                    <section className={styles.banner}>
                        <div className={styles.banner__content}>
                            <h1 className={styles.banner__title}>
                                Découvrez notre collection exclusive
                            </h1>
                            <p className={styles.banner__subtitle}>
                                Trouvez les produits parfaits pour vous
                            </p>
                            <Link to="/category">
                                <Button className={`button__primaryOutline ${styles.banner__button}`}>
                                    Découvrir maintenant                            
                                </Button>
                            </Link>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
    )
}

export default Banner