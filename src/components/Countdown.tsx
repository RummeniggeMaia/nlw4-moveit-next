import { useEffect, useState } from 'react'
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout

const Countdown = () => {
  const timeMath = .05 * 60
  const [time, setTime] = useState(timeMath)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinisted] = useState(false)

  const mins = Math.floor(time / 60)
  const secs = time % 60

  const [minL, minR] = String(mins).padStart(2, '0').split('')
  const [secL, secR] = String(secs).padStart(2, '0').split('')

  const startCD = () => {
    setIsActive(true)
  }

  const resetCD = () => {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(timeMath)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time == 0) {
      setHasFinisted(true)
      setIsActive(false)
    }
  }, [isActive, time])

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