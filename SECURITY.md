# Security notes

## Firebase client API keys

This app ships Firebase client configuration in the usual mobile files (`android/app/google-services.json`, `ios/GoogleService-Info.plist`). Those API keys are expected to appear in client builds; they are **not** server secrets.

They **must** be restricted in [Google Cloud Console](https://console.cloud.google.com/apis/credentials) for the Firebase/Google project:

- **Android:** Application restriction → Android apps (package name + SHA-1)
- **iOS:** Application restriction → iOS apps (bundle ID)
- **Web** (if you add a web app later): HTTP referrer restrictions

Also limit the key to only the APIs this app needs (API restrictions). Do not treat an unrestricted client key as safe.

Do not commit service-account JSON or other private server credentials to this repository.
