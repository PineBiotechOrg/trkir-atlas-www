export interface User {
    id: number;
    login: string;
    email: string;
    phone: string;
    role: null;
}

export interface GetUserInfoResponse {
    message: string;
    user?: User;
}

export enum StatusState {
    Success = 'success',
    Failed = 'failed',
}
