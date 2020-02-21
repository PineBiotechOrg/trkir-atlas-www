import {Feature} from 'infrastructure/plots';
import {Omit} from 'infrastructure/utils';

export interface OwnProps {
    url: string;
}

export type Props = OwnProps;

export type OmittedFeature = Omit<Feature, 'date'>;

export interface State {
    option: keyof OmittedFeature;
}
