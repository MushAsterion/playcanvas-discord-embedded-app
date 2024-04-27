import Head from 'next/head';
import { useEffect } from 'react';
import { DiscordSDK } from '@discord/embedded-app-sdk';

function addScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.defer = true;

        script.addEventListener('load', resolve);
        script.addEventListener('error', reject);
        document.body.appendChild(script);
    });
}

export default function Home() {
    useEffect(() => {
        (async () => {
            document.body.style.background = process.env.NEXT_PUBLIC_DISCORD_AUTH_BACKGROUND || '#000';
            const discordSdk = new DiscordSDK(process.env.NEXT_PUBLIC_DISCORD_APP_CLIENT_ID);

            await discordSdk.ready();

            const { code } = await discordSdk.commands.authorize({
                client_id: process.env.NEXT_PUBLIC_DISCORD_APP_CLIENT_ID,
                response_type: 'code',
                state: '',
                prompt: 'none',
                scope: ['identify', 'guilds']
            });

            const { access_token } = await fetch('/api/token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code })
            }).then(r => r.json());

            window.auth = await discordSdk.commands.authenticate({ access_token });

            if (!window.auth) {
                throw new Error('Authenticate command failed');
            }

            window.discordSdk = discordSdk;
            await addScript('__start__.js');
            await addScript('__loading__.js');
        })();
    }, []);

    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover" />
        </Head>
    );
}
