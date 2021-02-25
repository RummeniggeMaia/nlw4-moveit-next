import "../styles/global.css"

import { ChallengesProvider } from '../contexts/ChallengesContext'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
