import CompletedChallenges from '../components/CompletedChallenges'
import Countdown from '../components/Countdown'
import ExperienceBar from "../components/ExperienceBar"
import Profile from '../components/Profile'

import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'
import ChallengeBox from '../components/ChallengeBox'
import { CountdownProvider } from '../contexts/CountdownContext'

const Home = (props: any) => {

  console.log(props)

  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar />
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
    </div>
  )
}

export const getServerSideProps = async () => {
  const user = {
    level: 1,
    currentExperience: 50,
    challengesCompleted: 2,
  }

  return {
    props: user
  }
}

export default Home