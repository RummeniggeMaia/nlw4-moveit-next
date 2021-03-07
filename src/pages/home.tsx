import React from 'react'
import CompletedChallenges from '../components/CompletedChallenges'
import Countdown from '../components/Countdown'
import Profile from '../components/Profile'

import { CountdownProvider } from '../contexts/CountdownContext'
import ChallengeBox from '../components/ChallengeBox'
import { GetServerSideProps } from 'next'
import axios from 'axios'

import Layout from './layout'

const Home = (props) => {

  return (
    <Layout
      title="Início"
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}>

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
