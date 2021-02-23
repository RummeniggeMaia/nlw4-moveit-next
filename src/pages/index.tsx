import Head from 'next/head'
import ExperienceBar from "../components/ExperienceBar"
import Profile from '../components/Profile'

const Home = (props: any) => (
  <div className="container">
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