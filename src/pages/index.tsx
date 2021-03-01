import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

import styles from '../styles/pages/Login.module.css'

const Login = () => {
  const [session, loading] = useSession()

  return (
    <div className={styles.loginContainer}>
      <section>
        <img src="/icons/simbolo.svg" alt="" />
        <div>
          <img src="/icons/logo.svg" alt="" />
          <strong>Bem-vindo</strong>
          <p>
            <img src="/icons/github.svg" alt="" />
            Faça login com o seu Github<br /> para começar
          </p>
          <div>
            <input
              type="text"
              value={session ? session.user.name : 'Click para logar'}
              readOnly />

            {
              session ? (
                <Link href="/home" replace><a><img src="/icons/arrow.svg" alt="" /></a></Link>
              ) : (
                  <Link href="#"><span onClick={() => signIn()}><img src="/icons/arrow.svg" alt="" /></span></Link>
                )
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
