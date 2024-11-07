import { Clock } from '../Clock/Clock';
import styles from './Landing.module.scss';
import {NavLink} from 'react-router-dom';

export function Landing() {
  return (
    <>

     <Box className={styles.Admin}>
      <button>Admin</button>
     </Box>

     <Box className={styles.ClockAndStart}>
      <Box>
      <Clock />
      </Box>
     <NavLink to={'/'}>Start &gt;</NavLink>
     </Box>

    </>
  );
}