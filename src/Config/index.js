// Secrets (especially SENDBIRD_API_TOKEN) must come from env — never commit live values.
// Copy .env.example → .env and set SENDBIRD_API_TOKEN (and optionally SENDBIRD_APP_ID).
// For React Native builds, load .env via your usual tooling (e.g. react-native-config / babel dotenv).
const env = (typeof process !== 'undefined' && process.env) || {}

export const Config = {
  API_URL: env.API_URL || 'http://35.154.249.193:8009/',
  SENDBIRD_APP_ID: env.SENDBIRD_APP_ID || '',
  SENDBIRD_API_TOKEN: env.SENDBIRD_API_TOKEN || '',
}
