import { Clock } from '../Clock/Clock';
import { Question } from '../Question/Question';
import styles from './Landing.module.scss';

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
     <button>Start &gt;</button>
     <Question />
     </div>
    
    

    </>
  );
}