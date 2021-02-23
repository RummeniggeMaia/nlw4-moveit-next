import { useEffect, useState } from 'react'
import styles from '../styles/components/Countdown.module.css'

const Countdown = () => {
  const [time, setTime] = useState(25 * 60)
  const [active, setActive] = useState(false)

  const mins = Math.floor(time / 60)
  const secs = time % 60

  const [minL, minR]= String(mins).padStart(2, '0').split('')
  const [secL, secR]= String(secs).padStart(2, '0').split('')

  const startCD = () => {
    setActive(true)
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time -1)
      }, 1000)
    }
  }, [active, time])

  return(
    <div>
      <div className={ styles.countdownContainer }>
        <div>
          <span>{ minL }</span>
          <span>{ minR }</span>
        </div>
        <span>:</span>
        <div>
          <span>{ secL }</span>
          <span>{ secR }</span>
        </div>
      </div>

      <button 
        type="button" 
        className={ styles.countdownButton }
        onClick={ startCD }>
        Iniciar um ciclo
      </button>
    </div>
  )
}

export default Countdown