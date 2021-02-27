import { useContext, useEffect, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'

import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout

const Countdown = () => {
  const {
    time,
    mins,
    secs,
    hasFinished,
    isActive,
    resetCD,
    startCD
  } = useContext(CountdownContext)

  const loading = Math.round((2 * 60) * 100) / time - 100

  const [minL, minR] = String(mins).padStart(2, '0').split('')
  const [secL, secR] = String(secs).padStart(2, '0').split('')

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minL}</span>
          <span>{minR}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secL}</span>
          <span>{secR}</span>
        </div>
      </div>
      <div className={styles.countdownButtonBox}>
        {hasFinished ? (
          <button
            disabled
            className={`${styles.countdownButton}`}>
            Ciclo encerrado
          </button>
        ) : (
            <>
              {isActive ? (
                <button
                  type="button"
                  className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                  onClick={resetCD}>
                  Abandonar ciclo
                </button>
              ) : (
                  <button
                    type="button"
                    className={styles.countdownButton}
                    onClick={startCD}>
                    Iniciar um ciclo
                  </button>
                )
              }
            </>
          )}
        <div className={styles.borderLoading} style={{ width: `${loading}%` }}></div>
      </div>
    </div>
  )
}

export default Countdown