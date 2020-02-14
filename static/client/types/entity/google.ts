export interface OAuthCodeRequest {
    code: string;
    redirect_url: string;
}

export interface OAuthServiceInfoResponse {
    client_id: string;
}
