declare module 'entity/experiments' {
    import {Mice} from 'entity/mice';

    export interface Experiment {
        user: number;
        title: string;
        description: string;
        id: number;
        status: string;
        date_start: string;
        date_end: string;
        place: string;
        mice?: Mice;
    }
    export type Experiments = Experiment[];

    export interface ExperimentsResponse {
        experiments: Experiments;
        message: string;
    }

    export interface ExperimentResponse {
        experiment: Experiment;
        message: string;
    }

    export interface ExperimentFilters {
        title: string;
    }

    export interface ExperimentMiceFilters {
        name: string;
    }
}
