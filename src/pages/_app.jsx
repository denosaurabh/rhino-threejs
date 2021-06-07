import { Leva } from 'leva'
import '../styles/index.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Leva
        oneLineLabels
        hideTitleBar
        collapsed
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
