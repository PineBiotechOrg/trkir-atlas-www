export interface RequestQuery {
    timestamp: string | undefined;
}

export interface BaseRequestDataResponse<PD> {
    message: 'ok' | 'error';
    timestamp: string;
}
export type RequestDataResponse<PD> = BaseRequestDataResponse<PD> & {
    [key: string]: PDList<PD>;
};

export type RequestResponse<PD> = PDList<PD> | string;

export interface WithPlotOptions<PD> {
    id: string;
    fetch: {
        postResponse: <Result extends RequestDataResponse<PD>>(result: Result) => RequestResponse<PD>;
    };
    timeout?: number;
    preloader?: () => void;
}

export type PDList<PD> = PD[];

export interface StateProps<PD> {
    data: PDList<PD>;
    error: string | null;
}
export type WithPlotProps<PD> = StateProps<PD>;
