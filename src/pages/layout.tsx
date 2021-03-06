import React, { ReactNode, useEffect } from 'react'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

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
  const [session, loading] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push('/')
    }
  }, [])

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

export default Layout
