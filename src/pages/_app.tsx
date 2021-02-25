import "../styles/global.css"

import { ChallengesProvider } from '../contexts/ChallengesContext'
import { CountdownProvider } from "../contexts/CountdownContext"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
