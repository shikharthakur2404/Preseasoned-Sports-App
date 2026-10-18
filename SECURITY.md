# Security notes

## Firebase client API keys

This app ships Firebase client configuration in the usual mobile files (`android/app/google-services.json`, `ios/GoogleService-Info.plist`). Those API keys are expected to appear in client builds; they are **not** server secrets.

They **must** be restricted in [Google Cloud Console](https://console.cloud.google.com/apis/credentials) for the Firebase/Google project:

- **Android:** Application restriction → Android apps (package name + SHA-1)
- **iOS:** Application restriction → iOS apps (bundle ID)
- **Web** (if you add a web app later): HTTP referrer restrictions

Also limit the key to only the APIs this app needs (API restrictions). Do not treat an unrestricted client key as safe.

Do not commit service-account JSON or other private server credentials to this repository.

## Sendbird Platform API token

`SENDBIRD_API_TOKEN` is a **server-side** Platform API secret. It must not be hardcoded in client source.

- Load it from environment (see `.env.example`; copy to `.env`, which is gitignored).
- Wire `.env` into the React Native build with your usual config tooling (for example `react-native-config` or a babel dotenv plugin).
- **Action required:** an older live token was previously committed in `src/Config/index.js` and remains in git history. **Rotate/revoke that token in the Sendbird Dashboard** (Application → Settings → API tokens), then put only the new token in local `.env` (never commit it).
