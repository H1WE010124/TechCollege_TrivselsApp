import { Clock } from '../Clock/Clock';
import styles from './Landing.module.scss';
import {NavLink} from 'react-router-dom';

export function Landing() {
  return (
    <>

     <div className={styles.Admin}>
      <button>Admin</button>
     </div>

     <div className={styles.ClockAndStart}>
      <div>
      <Clock />
      </div>
     <NavLink to={'/'}>Start &gt;</NavLink>
     </div>

    </>
  );
}