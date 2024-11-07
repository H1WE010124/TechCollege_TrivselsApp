import { Clock } from '../Clock/Clock';
import styles from './Landing.module.scss';
import {NavLink} from 'react-router-dom';
import Box from '@mui/material/Box';


export function Landing() {
  
  return (
    <>

     <Box className={styles.Admin}>
      <button>Admin</button>
     </Box>

     <Box className={styles.ClockAndStart}>
      <Box
      sx={{
        color: '#2E7D32',
        fontsize: rem (5),
        marginBottom: rem (2),
      }}>
      <Clock />
      </Box>
     <NavLink to={'/'}>Start &gt;</NavLink>
     </Box>

    </>
  );
}