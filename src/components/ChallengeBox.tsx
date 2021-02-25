import styles from '../styles/components/ChallengeBox.module.css'

const ChallengeBox = () => {
  const hasActiveChallenge = true

  return (
    <div className={styles.challengeboxContainer}>
      { hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" alt="" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minuntos.</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}>
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
          <div className={styles.challengeNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="levelUp" />
              Avance de level completando desafios
            </p>
          </div>
        )
      }
    </div>
  )
}

export default ChallengeBox
