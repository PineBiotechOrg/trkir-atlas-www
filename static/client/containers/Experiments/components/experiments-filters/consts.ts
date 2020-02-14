import {ExperimentsFilterStatus} from 'client/types/entity/experiments';

import {Options} from 'infrastructure/common';

export const EXPERIMENT_STATUSES: Options = [
    {id: ExperimentsFilterStatus.All, label: 'All'},
    {id: ExperimentsFilterStatus.Live, label: 'Live'},
    {id: ExperimentsFilterStatus.Favorite, label: 'Favorite'},
];
