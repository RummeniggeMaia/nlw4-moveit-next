import styles from '../styles/pages/Login.module.css'

const Login = () => {

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
            <input type="text" />
            <a href="#"><img src="/icons/arrow.svg" alt="" /></a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
