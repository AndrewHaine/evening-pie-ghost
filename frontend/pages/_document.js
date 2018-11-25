import Document, { Head, Main, NextScript } from "next/document";

class BlogDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Muli:300,300i,700,700i|Overlock:400,400i,900,900i"
          />
          <meta property="og:site_name" content="Evening Pie" />
          <meta
            property="og:url"
            content={typeof window !== "undefined" && window.location}
          />
          <meta name="twitter:creator" content="@Andrew_Haine" />
          <meta name="twitter:site" content="@Andrew_Haine" />
          <meta name="theme-color" content="#383A3F" />
          <link
            rel="canonical"
            href={typeof window !== "undefined" && window.location}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default BlogDocument;
