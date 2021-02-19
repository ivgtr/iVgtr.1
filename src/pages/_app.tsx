import * as React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '../assets/styles/styles.scss'

import Container from '../components/essentials/Container'

const App = ({ Component, pageProps }: AppProps) => {
  const title = 'ハイファイ新書'
  const description = '私たちの最大の目的はワンダーエッグプライオリティ'

  return (
    <>
      <Head>
        <title>{title}</title>
        <head prefix="og: http://ogp.me/ns#" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
        <meta name="theme-color" content="#fcfc67" key="themeColor" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ivgtr.me" />
        <meta property="og:site_name" content={title} />
        <meta
          property="og:image"
          content="'https://lh3.googleusercontent.com/D4SiydTja38u0dV9gfjR0CMWmSdV59qBYBQt6KuHl_Q8AUhJBIMOAuB-nmhyIHT8HvLFLZUpATz7XLAo6UxxF4jv2zSpv5N75mJ0vUr6p1Syf-UFQtYvAB58Y3KI8aiV1gnQ1ZC2mg=w1200'"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
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
