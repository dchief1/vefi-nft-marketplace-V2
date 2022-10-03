import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {/* <link rel="apple-touch-icon" href="/static/favicon.ico" /> */}
          {/* <link rel="icon" href="/static/favicon.ico" /> */}
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
          <meta name="theme-color" content="#000000" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={undefined} />
          <link href="https://fonts.googleapis.com/css2?family=Outfit&display=swap" rel="stylesheet" />
          <link href="http://fonts.cdnfonts.com/css/monument-extended" rel="stylesheet" />
          <meta
            name="description"
            content="The Vefi NFT marketplace/launchpad is an independent product of the Vefi Ecosystem. The Vefi Ecosystem is aimed at the immersion of common sectors into the web3 space."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
