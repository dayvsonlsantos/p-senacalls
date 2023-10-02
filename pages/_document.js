import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="pt-br">
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icon-512x512.png"></link>
                <meta name="theme-color" content="#004C94" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}