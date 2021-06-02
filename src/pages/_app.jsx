import { Leva } from 'leva'
import '../styles/index.css'

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
