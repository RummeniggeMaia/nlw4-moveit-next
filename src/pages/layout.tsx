import React, { ReactNode } from 'react'

import ExperienceBar from "../components/ExperienceBar"
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import Sidemenu from '../components/Sidemenu'
import { ChallengesProvider } from '../contexts/ChallengesContext'

import styles from '../styles/pages/Home.module.css'

interface LayoutProps {
  level?: number
  currentExperience?: number
  challengesCompleted?: number
  title: string
  children: ReactNode
}

const Layout = (props: LayoutProps) => {

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}>

      <div className={styles.container}>
        <Head>
          <title>{props.title} | mexa.se</title>
        </Head>
        <ExperienceBar />
        <Sidemenu />
        {props.children}
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}


export default Layout
