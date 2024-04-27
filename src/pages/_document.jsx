import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <link rel="manifest" href="manifest.json" />
                <style></style>
                <link rel="stylesheet" type="text/css" href="styles.css" />
                <script src="playcanvas-stable.min.js"></script>
                <script src="__settings__.js"></script>
            </Head>
            <body>
                <Main />
                <NextScript />
                <script src="__modules__.js"></script>
            </body>
        </Html>
    );
}
