import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html className="nightwind">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="sb78639V" data-description="Support me on Buy me a coffee!" data-message="Thanks for visiting! now you can buy me a coffee!" data-color="#FFDD00" data-position="Right" data-x_margin="18" data-y_margin="18" async></script>

         
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
