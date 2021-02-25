import styles from '../styles/components/ChallengeBox.module.css'

const ChallengeBox = () => {
  const hasActiveChallenge = true

  return (
    <div className={styles.challengeboxContainer}>
      { hasActiveChallenge ? (
        <div /> >
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
