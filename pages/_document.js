import Document, { Head, Main, NextScript } from 'next/document'
import { renderToSheetList } from 'fela-dom'
import getRenderer from '../styles/fela'
import GlobalStyles from '../components/Styles'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const page = renderPage()
    const renderer = getRenderer()
    renderer.renderStatic(String(GlobalStyles))
    console.log({GlobalStyles})
    //   const globalStyles = styles[req.url]

    const sheetList = renderToSheetList(renderer)
    renderer.clear()

    return {
      ...page,
      sheetList
    }
  }

  render () {
    const styleNodes = this.props.sheetList.map(({ type, media, css }) =>
      <style data-fela-type={type} media={media}>{css}</style>
    )

    return (
      <html>
        <Head>
          <title>Accreditron</title>
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
