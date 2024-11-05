import { NavLink, useNavigate } from 'react-router-dom';
import styles from './navigation.module.scss';

export const Navigation = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.navigation}>
            <NavLink to="/signin" className={`${styles.navButton} ${styles.adminButton}`}>
                Admin
            </NavLink>
            <button onClick={() => navigate(-1)} className={styles.navButton}>Tilbage</button>
        </div>
    );
};
