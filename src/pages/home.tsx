import React from 'react'
import CompletedChallenges from '../components/CompletedChallenges'
import Countdown from '../components/Countdown'
import Profile from '../components/Profile'

import { CountdownProvider } from '../contexts/CountdownContext'
import ChallengeBox from '../components/ChallengeBox'

import Layout from './layout'

const Home = () => {

  return (
    <Layout
      level={0}
      currentExperience={0}
      challengesCompleted={0}
      title="Início">

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </Layout>
  )
}

export default Home
