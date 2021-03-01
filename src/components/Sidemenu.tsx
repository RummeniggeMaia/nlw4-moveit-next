import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from '../styles/components/Sidemenu.module.css'


const Sidemenu = () => {

  const router = useRouter()
  const name = router.pathname

  return (
    <div className={styles.sidemenuContainer}>
      <img src="/icons/logo2.svg" alt="Logotipo" />
      <div></div>
      <div>
        <Link href="/home">
          <div className={styles.menuItem}>
            {name === '/home' ? <span></span> : <div></div>}
            <img src={`/icons/home_${name === '/' ? 'on' : 'off'}.svg`} alt="Home" />
            <div></div>
          </div>
        </Link>
        <Link href="/ranking">
          <div className={styles.menuItem}>
            {name === '/ranking' ? <span></span> : <div></div>}
            <img src={`/icons/award_${name === '/ranking' ? 'on' : 'off'}.svg`} alt="Ranking" />
            <div></div>
          </div>
        </Link>
      </div>
      <div></div>
    </div>
  )
}

export default Sidemenu
