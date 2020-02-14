const GOOGLE_OAUTH_BASE_HOST =
    'https://accounts.google.com/o/oauth2/auth?response_type=code&scope=https://www.googleapis.com/auth/userinfo.email';
export const makeGoogleOauthHost = (locationOrigin: string, clientId: string): string => {
    return `${GOOGLE_OAUTH_BASE_HOST}&redirect_uri=${locationOrigin}/google_oauth/&client_id=${clientId}`;
};
