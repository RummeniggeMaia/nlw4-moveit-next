import { useContext, useEffect, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'

import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout

const Countdown = () => {
  const {
    mins,
    secs,
    hasFinished,
    isActive,
    resetCD,
    startCD
  } = useContext(CountdownContext)

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
      { hasFinished ? (
        <button
          disabled
          className={`${styles.countdownButton}`}>
          Ciclo encerrado
        </button>
      ) : (
          <>
            { isActive ? (
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
    </div>
  )
}

export default Countdown