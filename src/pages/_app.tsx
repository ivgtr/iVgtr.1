import * as React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '../assets/styles/styles.scss'

import Container from '../components/essentials/Container'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>ハイファイ新書</title>
        <meta name="description" content="私たちの最大の目的はワンダーエッグプライオリティ" />
        <meta name="viewport" content="width=device-width,height=device-height" key="viewport" />
        <meta name="theme-color" content="#087da1" key="themeColor" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div id="root">
        <Container>
          <Component {...pageProps} />
        </Container>
      </div>
    </>
  )
}

export default App
