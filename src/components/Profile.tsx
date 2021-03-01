import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { useSession, signOut } from 'next-auth/client'

import styles from '../styles/components/Profile.module.css'
import Link from 'next/link'

const Profile = () => {
  const { level } = useContext(ChallengesContext)
  const [session, loading] = useSession()

  return (
    <div className={styles.profileContainer}>
      <img src={session?.user.image} alt={session?.user.name} />
      <div>
        <strong>{session?.user.name}</strong>
        <Link href="#">
          <a onClick={() => signOut()}>Sair</a>
        </Link>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}

export default Profile