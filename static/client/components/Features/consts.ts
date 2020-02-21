import {keys} from 'ts-transformer-keys';

import {arrayToOptions} from 'client/utils/options';

import {OmittedFeature} from './types';

export const keysOfFeature: (keyof OmittedFeature)[] = keys<OmittedFeature>();
export const FEATURES_OPTIONS = arrayToOptions<number | string>(keysOfFeature);
