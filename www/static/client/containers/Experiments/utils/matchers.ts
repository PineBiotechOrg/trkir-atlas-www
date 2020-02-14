import {Model as ExperimentModel} from '../components/experiment-form/types';
import {ExperimentRequest} from '../types';

export function preCreateExperiments({
    title,
    description,
    place,
}: ExperimentModel): ExperimentRequest {
    return {
        title,
        description,
        place,
    };
}
