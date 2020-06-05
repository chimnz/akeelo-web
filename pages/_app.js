import App from 'next/app'
import Head from 'next/head'
import React from 'react'

import '../styles/global.css'
import favicon from '../assets/images/favicon/favicon.ico'

// https://github.com/vercel/next.js/blob/master/errors/no-document-title.md
export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
			    <title>akeelo - search for science</title>
          <link rel='shortcut icon' href={favicon} />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}