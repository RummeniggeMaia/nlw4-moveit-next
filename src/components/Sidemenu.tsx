import styles from '../styles/components/Sidemenu.module.css'

const Sidemenu = () => {

  return (
    <div className={styles.sidemenuContainer}>
      <img src="/icons/logo.svg" alt="Logotipo" />
      <div>
        <div className={styles.menuItem}>
          <span></span>
          <img src="/icons/home.svg" alt="Home" />
        </div>
        <div className={styles.menuItem}>
          <span></span>
          <img src="/icons/award.svg" alt="award" />
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Sidemenu
