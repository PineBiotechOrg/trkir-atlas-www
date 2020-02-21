import {SimplePlot} from 'client/components/Plots';
import withPlot from 'client/utils/hocs/withPlot';

import {Feature} from 'infrastructure/plots';

import {OwnProps} from '../../types';

export default withPlot<OwnProps, Feature>({
    id: 'features',
    fetch: {
        postResponse: result => {
            return result.features;
        },
    },
    timeout: 1000,
    // TODO: Поправить типы
})(SimplePlot as any);
