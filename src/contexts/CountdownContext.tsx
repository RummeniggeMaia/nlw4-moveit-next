import { Children, createContext, ReactNode, useContext, useEffect, useState } from 'react'
import Countdown from '../components/Countdown'
import { ChallengesContext } from './ChallengesContext'

interface CountdownContextData {
  time: number
  mins: number
  secs: number
  hasFinished: boolean
  isActive: boolean
  startCD: () => void
  resetCD: () => void
}

interface CountdownProviderProps {
  children: ReactNode
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout

export const CountdownProvider = ({ children }: CountdownProviderProps) => {
  const { startNewChallenge } = useContext(ChallengesContext)

  const timeMath = 2 * 60
  const [time, setTime] = useState(timeMath)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinisted] = useState(false)

  const mins = Math.floor(time / 60)
  const secs = time % 60

  const startCD = () => {
    setIsActive(true)
  }

  const resetCD = () => {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(timeMath)
    setHasFinisted(false)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time == 0) {
      setHasFinisted(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])

  return (
    <CountdownContext.Provider value={{
      time,
      mins,
      secs,
      hasFinished,
      isActive,
      startCD,
      resetCD
    }}>
      { children}
    </CountdownContext.Provider>
  )
}
