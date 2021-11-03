import '../styles/globals.css'
import type { AppProps } from 'next/app'

//codigo que se ejecuta en todas las paginas
function MyApp({ Component, pageProps }: AppProps) {

  console.log("codigo front, desde app")
  return <Component {...pageProps} />
}

export default MyApp
