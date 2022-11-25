import { Html, Head, Main, NextScript } from "next/document";
import Document from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Anton&family=Koulen&family=Montserrat:ital@1&family=Roboto+Condensed&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128+Text&display=swap"
            rel="stylesheet"
          ></link>

          <meta
            name="donate to charity"
            content="Donate and help save people"
          />
        </Head>

        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
