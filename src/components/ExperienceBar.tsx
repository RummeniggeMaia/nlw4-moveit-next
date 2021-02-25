import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css'

const ExperienceBar = (props: any) => {
  const { currentExperience } = useContext(ChallengesContext)
  return (
    <header className={styles.experienceBar}>
      <span> {currentExperience} </span>
      <div>
        <div style={{ width: '50%' }} />
        <span className={styles.currentExperience} style={{ left: '50%' }}>
          300 xp
          </span>
      </div>
      <span>688 xp</span>
    </header>
  );
}

export default ExperienceBar;