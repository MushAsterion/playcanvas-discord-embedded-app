# Discord Activities Integration for Playcanvas Apps

This repository provides a template for integrating a Playcanvas application within Discord Activities. By following the instructions below, you can easily set up your Playcanvas app to be displayed within Discord's Embedded Apps.

## Getting Started

Follow these steps to set up the template for your Playcanvas application:

1. **Clone the Repository**: Clone this repository to your local machine.

    ```bash
    git clone https://github.com/MushAsterion/playcanvas-discord-embedded-app.git
    ```

2. **Set Environment Variables**:

    Open the `.env` file and update the following environment variables:

    - `NEXT_PUBLIC_DISCORD_APP_CLIENT_ID`: Set this to your [Discord application's client ID](https://discord.com/developers/docs/activities/building-an-activity#step-1-creating-a-new-app).
    - `DISCORD_APP_CLIENT_SECRET`: Set this to your [Discord application's client secret](https://discord.com/developers/docs/activities/building-an-activity#step-1-creating-a-new-app).
    - `NEXT_PUBLIC_DISCORD_AUTH_BACKGROUND` (Optional): Set this to change the background displayed until the user authorizes the game. Will default to `#000` (plain black background).

3. **Add Playcanvas Build**:

    - [Build your Playcanvas application](https://developer.playcanvas.com/user-manual/publishing/web/self-hosting/).
    - Upload your build to the repository, except for the `index.html` file within the `public` folder.

4. **Update Index.html** (Optional):

    If your `index.html` file is different from the default one provided by Playcanvas Editor, update it within `src/pages/_document.jsx` file to match the content, except for the scripts `__start__.js` and `__loading__.js` that will be loaded after user is authenticated.

5. **Deploy the Application**:

    Deploy your application using your preferred method.

## Usage

Once you've completed the setup, users can interact with your Playcanvas application directly within Discord Activities. Please refer to [Discord's official documentation](https://discord.com/developers/docs/activities/building-an-activity#step-6-use-the-sdk-to-fetch-the-channel) to use the SDK.

[SDK](https://discord.com/developers/docs/developer-tools/embedded-app-sdk) is available directly from `window.discordSdk`, and authentication is available directly from `window.discordSdkAuth`.

## Contributing

Contributions are welcome! If you have any improvements or suggestions, feel free to open an issue or pull request.

## License

This project is licensed under the [MIT License](LICENSE).
