/** @type {import('next').NextApiHandler} */
export default async (req, res) => {
    const { access_token } = await fetch(`https://discord.com/api/oauth2/token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            client_id: process.env.NEXT_PUBLIC_DISCORD_APP_CLIENT_ID,
            client_secret: process.env.DISCORD_APP_CLIENT_SECRET,
            grant_type: 'authorization_code',
            code: req.body.code
        })
    }).then(r => r.json());

    return res.send({ access_token });
};
