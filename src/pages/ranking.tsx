import React, { useEffect, useState } from 'react'
import styles from '../styles/pages/Ranking.module.css'
import axios from 'axios'

import Layout from './layout'

const Ranking = (props) => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    (async () => {
      await axios.get('/api/user_progress', {}).then(res => {
        setUsers(res.data)
      })
    })()
  }, [])

  return (
    <Layout title="Ranking"
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}>

      <div className={styles.container}>
        <strong>Leaderboard</strong>
        <div className={styles.table}>
          <header>
            <span>POSIÇÂO</span>
            <span>USUÁRIO</span>
            <span>DESAFIOS</span>
            <span>EXPERIÊNCIA</span>
          </header>
          <main>
            {users.map((value, key) => (
              <div key={key}>
                <span className={styles.columnPosition}>{key + 1}</span>
                <span className={styles.columnUser}>
                  <img src="https://avatars.githubusercontent.com/u/3748273?v=4" alt={value.userName} />
                  <div>
                    <strong>{value.userName}</strong>
                    <p>
                      <img src="icons/level.svg" alt="Level" />
                      Level {value.level}
                    </p>
                  </div>
                </span>
                <span><strong>{value.challengesCompleted}</strong> completados</span>
                <span><strong>{value.currentExperience}</strong> xp</span>
              </div>
            ))}
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default Ranking
{/* <div>
                <span className={styles.columnPosition}>1</span>
                <span className={styles.columnUser}>
                  <img src={value.image} alt="Rummenigge Maia" />
                  <div>
                    <strong>Rummenigge Maia</strong>
                    <p>
                      <img src="icons/level.svg" alt="Level" />
                      Level 1
                    </p>
                  </div>
                </span>
                <span><strong>127</strong> completados</span>
                <span><strong>154000</strong> xp</span>
              </div> */}