import Document, { Head, Main, NextScript } from 'next/document'
import { renderToSheetList } from 'fela-dom'
import getRenderer from '../styles/fela'
import GlobalStyles from '../styles/global-styles'

export default class Doc extends Document {
  static getInitialProps ({ renderPage }) {
    const page = renderPage()
    const renderer = getRenderer()
    //  renderer.renderStatic(GlobalStyles)
    //   const globalStyles = styles[req.url]

    const sheetList = renderToSheetList(renderer)
    renderer.clear()

    return {
      ...page,
      sheetList
    }
  }

  render () {
    const styleNodes = this.props.sheetList.map(({ type, media, css }, i) =>
      <style key={i} data-fela-type={type} media={media}>{css}</style>
    )

    return (
      <html>
        <Head>
          <title>Accreditron</title>
          <style dangerouslySetInnerHTML={{ __html: GlobalStyles }} />
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
