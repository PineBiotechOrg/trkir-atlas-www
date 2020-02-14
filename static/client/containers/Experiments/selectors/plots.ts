import {PlotData} from 'plotly.js';
import {createSelector} from 'reselect';

import {PCA_PLOT_CONFIG} from '../components/experiments-table-item-pca/consts';
import {PCA_PLOTS} from '../components/experiments-table-item-pca/consts.mock';
import {BundleState} from '../types';

export const pcaDataSelector = createSelector(
    (_: BundleState) => PCA_PLOTS,
    (PCA_PLOTS: Partial<PlotData>[]) => PCA_PLOTS
        .map(item => ({
            ...PCA_PLOT_CONFIG,
            ...item,
        })),
);
