import { useContext, useEffect, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'

import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout

const Countdown = () => {
  const {
    TIME_MATH,
    time,
    mins,
    secs,
    hasFinished,
    isActive,
    resetCD,
    startCD
  } = useContext(CountdownContext)

  const loading = 100 - Math.round(100 * time) / TIME_MATH

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
            <img src="/icons/check_circle.svg" alt="Encerrado" />
          </button>
        ) : (
            <>
              {isActive ? (
                <button
                  type="button"
                  className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                  onClick={resetCD}>
                  Abandonar ciclo
                  <div className={styles.abandonIcon}></div>
                </button>
              ) : (
                  <button
                    type="button"
                    className={styles.countdownButton}
                    onClick={startCD}>
                    Iniciar um ciclo
                    <img src="/icons/play_arrow.Svg" alt="Iniciar" />
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