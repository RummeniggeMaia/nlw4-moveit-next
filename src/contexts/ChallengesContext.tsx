import { createContext, useState, ReactNode } from 'react'

export const ChallengesContext = createContext({})

interface ChallengesProviderProps {
  children: ReactNode
}

export const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challegesCompleted, setChallengesCompleted] = useState(0)

  const levelUp = () => {
    setLevel(level + 1)
  }

  return (
    <ChallengesContext.Provider value={{
      level,
      currentExperience,
      challegesCompleted,
      levelUp
    }}>
      { children}
    </ChallengesContext.Provider>
  )
}
