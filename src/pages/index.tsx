import Head from 'next/head'
import ExperienceBar from "../components/ExperienceBar"
import Profile from '../components/Profile'

import styles from '../styles/pages/Home.module.css'

const Home = (props: any) => (
  <div className={ styles.container }>
    <ExperienceBar />

    <section>
      <div>
        <Profile />
      </div>
      <div>

      </div>
    </section>
  </div>
)

export default Home