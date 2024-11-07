import { Clock } from '../Clock/Clock';
import styles from './Landing.module.scss';

export function Landing() {
  return (
    <>
    <div className={styles.Admin}>
    <button>Admin</button>
    </div>

    <Clock></Clock>

    <div className={styles.Start}>
    <button>Start &gt;</button>
    </div>
    
    
    </>
  );
}
