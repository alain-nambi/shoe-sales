import { Link } from "react-router-dom"
import { Button } from "../../ui/button";

import styles from "./banner.module.css"

const Banner: React.FC = () => {
    return (
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
    )
}

export default Banner