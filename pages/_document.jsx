import Document, { NextScript, Main, Head , Html} from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <html lang="en">
        <Head>
          <mta name="description" content="A site for programming portfolio" />
          <meta charset="utf-8" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
            rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
        body{
            font-family: 'Rubik', sans-serif; 
        }
        
        `}</style>
      </html>
      </Html>
    );
  }
}
export default MyDocument;
