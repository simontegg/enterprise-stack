import Document, { Head, Main, NextScript } from 'next/document'
import { renderToSheetList } from 'fela-dom'
import getRenderer from '../styles/fela'

import styles from '../semantic/src/globals.less'
// const styles = {
//   '/': indexStyle
// }

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const page = renderPage()
    const renderer = getRenderer()
    //   const globalStyles = styles[req.url]
    const globalStyles = styles

    const sheetList = renderToSheetList(renderer)
    renderer.clear()

    return {
      ...page,
      globalStyles,
      sheetList
    }
  }

  render () {
    const { globalStyles, sheetList } = this.props

    const styleNodes = sheetList.map(({ type, media, css }) =>
      <style data-fela-type={type} media={media}>{css}</style>
    )

    return (
      <html>
        <Head>
          <title>My page</title>
          <style>{globalStyles}</style>
          {styleNodes}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
