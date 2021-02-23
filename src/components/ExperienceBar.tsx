import styles from '../styles/components/ExperienceBar.module.css'

const ExperienceBar = (props: any) => {
  return (
    <header className={ styles.experienceBar }>
      <span>8 xp</span>
        <div>
          <div style={{ width: '50%'}} />
          <span className={ styles.currentExperience } style={{ left: '50%'}}>
            300 xp
          </span>
        </div>
      <span>688 xp</span>
    </header>
  );
}

export default ExperienceBar;