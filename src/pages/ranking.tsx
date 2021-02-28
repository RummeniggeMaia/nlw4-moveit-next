import styles from '../styles/pages/Ranking.module.css'

import Layout from './layout'

const Ranking = () => {

  return (
    <Layout
      level={0}
      currentExperience={0}
      challengesCompleted={0}
      title="Ranking">
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ul>
    </Layout>
  )
}

export default Ranking
