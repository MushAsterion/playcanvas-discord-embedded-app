import Head from 'next/head';
import { useEffect } from 'react';

function addScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.defer = true;

        script.addEventListener('load', resolve);
        script.addEventListener('error', reject);
        document.body.appendChild(script);
        return script;
    });
}

export default function Home() {
    useEffect(() => {
        (async () => {
            document.body.style.backgroundColor = '#000';

            await addScript('__start__.js');
            await addScript('__loading__.js');
        })();
    }, []);

    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover" />
            <meta charSet="utf-8" />
            <link rel="manifest" href="manifest.json" />
            <style></style>
            <title>Discord Roll a ball</title>
        </Head>
    );
}
