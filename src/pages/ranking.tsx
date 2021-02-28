import React from 'react'
import styles from '../styles/pages/Ranking.module.css'

import Layout from './layout'

const Ranking = () => {

  return (
    <Layout
      level={0}
      currentExperience={0}
      challengesCompleted={0}
      title="Ranking">

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
            <div>
              <span className={styles.columnPosition}>1</span>
              <span className={styles.columnUser}>
                <img src="https://github.com/RummeniggeMaia.png" alt="Rummenigge Maia" />
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
            </div>
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default Ranking
