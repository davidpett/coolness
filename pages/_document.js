import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import { AppRegistry } from 'react-native-web'
import { ServerStyleSheet } from 'styled-components'

// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent('Main', () => Main)

    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styles = sheet.getStyleElement()

    return { ...page, styles }
  }

  render() {
    return (
      <html style={{ height: '100%' }}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {this.props.styles}
        </Head>
        <body style={{ height: '100%', overflow: 'hidden' }}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
