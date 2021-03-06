import { createContext, useState, ReactNode, useEffect } from 'react'
import Cookies from 'js-cookie'
import challenges from '../../challenges.json'
import LevelUpModal from '../components/LevelUpModal'
import axios from 'axios'
import { useSession } from 'next-auth/client'

interface Challenge {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface ChallengesContextData {
  level: number
  currentExperience: number
  experienceToNextLevel: number
  challengesCompleted: number
  activeChallenge: Challenge
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
  completeChallenge: () => void
  closeLevelUpModal: () => void
}

interface ChallengesProviderProps {
  children: ReactNode
  level: number
  currentExperience: number
  challengesCompleted: number
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export const ChallengesProvider =
  ({ children }: ChallengesProviderProps) => {
    const [session] = useSession()
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience]
      = useState(0)
    const [challengesCompleted, setChallengesCompleted]
      = useState(0)
    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow(((level + 1) * 4), 2)

    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

    useEffect(() => {
      (async () => {
        await axios.get('/api/user_progress', {
          params: { userName: session?.user.name }
        }).then(res => {
          if (!res.data.userName && session) {
            axios.post('/api/user_progress', {
              'level': String(level),
              'currentExperience': String(currentExperience),
              'challengesCompleted': String(challengesCompleted),
              'userName': session.user.name,
              'userImage': session.user.image
            })
          } else {
            setLevel(+res.data.level)
            setCurrentExperience(+res.data.currentExperience)
            setChallengesCompleted(+res.data.challengesCompleted)
          }
        })
      })()
    }, [])

    useEffect(() => {
      (async () => {
        if (session) {
          await axios.patch('/api/user_progress', {
            'level': String(level),
            'currentExperience': String(currentExperience),
            'challengesCompleted': String(challengesCompleted),
            'userName': session.user.name
          })
        }
      })()
    }, [level, currentExperience, challengesCompleted])

    useEffect(() => {
      Notification.requestPermission()
    }, [])

    const levelUp = () => {
      setLevel(level + 1)
      setIsLevelUpModalOpen(true)
    }

    const closeLevelUpModal = () => {
      setIsLevelUpModalOpen(false)
    }

    const startNewChallenge = () => {
      const ramdomChallengeIndex = Math.floor(Math.random() * challenges.length)
      const challenge = challenges[ramdomChallengeIndex]

      setActiveChallenge(challenge)

      // new Audio('/notification.mp3').play()

      // if (Notification.permission === 'granted') {
      //   new Notification('Novo desafio 🎉', {
      //     body: `Valendo ${challenge.amount} xp!`
      //   })
      // }
    }

    const resetChallenge = () => {
      setActiveChallenge(null)
    }

    const completeChallenge = () => {
      if (!activeChallenge) {
        return
      }

      const { amount } = activeChallenge

      let finalExperience = currentExperience + amount

      if (finalExperience >= experienceToNextLevel) {
        finalExperience = finalExperience - experienceToNextLevel
        levelUp()
      }

      setCurrentExperience(finalExperience)
      setActiveChallenge(null)
      setChallengesCompleted(challengesCompleted + 1)
    }

    return (
      <ChallengesContext.Provider value={{
        level,
        currentExperience,
        experienceToNextLevel,
        challengesCompleted,
        activeChallenge,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal
      }}>
        { children}

        { isLevelUpModalOpen && <LevelUpModal />}
      </ChallengesContext.Provider>
    )
  }
