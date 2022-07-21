import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps;
    return (
      <Html>
        <Head>
          <body className={pageProps.white ? "bg-white" : "bg-bg-color"}>
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}
