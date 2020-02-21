import fetch from 'isomorphic-fetch';
import queryString from 'query-string';

import {promiseTimeout} from './timeout';

export const enum Method {
    Get = 'GET',
    Post = 'POST',
    Patch = 'PATCH',
    Put ='PUT',
    Delete = 'DELETE',
}

class HTTPTransport {
    private readonly baseUrl: string;
    private timeout = 15000;

    constructor(baseUrl = '') {
        this.baseUrl = baseUrl;
    }

    public get<Query, Result>(endpoint: string, query?: Query, headers?: Headers): Promise<Result> {
        const requestParams = queryString.stringify(query);

        return this.request<Query, Result>(
            `${ this.baseUrl }${ endpoint }${ requestParams && `?${requestParams}` }`,
            Method.Get,
            undefined,
            headers,
        );
    }

    public post<Body, Result>(url: string, body?: Body, headers?: Headers): Promise<Result> {
        return this.sendWithData<Body, Result>(Method.Post, url, body, headers);
    }

    public patch<Body, Result>(url: string, body?: Body, headers?: Headers): Promise<Result> {
        return this.sendWithData<Body, Result>(Method.Patch, url, body, headers);
    }

    public put<Body, Result>(url: string, body?: Body, headers?: Headers): Promise<Result> {
        return this.sendWithData<Body, Result>(Method.Put, url, body, headers);
    }

    public delete<Body, Result>(url: string, body?: Body, headers?: Headers): Promise<Result> {
        return this.sendWithData<Body, Result>(Method.Delete, url, body, headers);
    }

    public customRequest<Request, Result>(
        url: string,
        method: string,
        body?: Request,
        headers?: Headers,
    ): Promise<Response> {
        return promiseTimeout<Response>(
            this.timeout,
            fetch(
                url,
                {
                    method,
                    headers,
                    body: body ? JSON.stringify(body) : undefined,
                    credentials: 'same-origin',
                },
            ),
        );
    }

    private request<Request, Result>(
        url: string,
        method: string,
        body?: Request,
        headers?: Headers,
    ): Promise<Result> {
        if (body instanceof FormData) {
            headers.delete('Content-Type');
        }

        return promiseTimeout<Response>(
            this.timeout,
            fetch(
                url,
                {
                    method,
                    headers,
                    body: body instanceof FormData ? body : JSON.stringify(body),
                    credentials: 'same-origin',
                },
            ),
        )
            .then((response: Response) => response.json());
    }

    private sendWithData<Body, Result>(method: string, url: string, body?: Body, headers?: Headers): Promise<Result> {
        if (!headers) {
            headers = new Headers();
        }

        headers.set('Content-Type', 'application/json');

        const endpoint = `${this.baseUrl}${url}`;

        return this.request<Body, Result>(endpoint, method, body, headers);
    }
}

export const api = new HTTPTransport('');
export const pybackendApi = new HTTPTransport('/api');
export const pybackendExperimentsApi = new HTTPTransport('/api/experiments');
export const usersApi = new HTTPTransport('/api/users');
export const camerasApi = new HTTPTransport('/api/cameras');
export const miceApi = new HTTPTransport('/api/mice');

export default pybackendApi;
