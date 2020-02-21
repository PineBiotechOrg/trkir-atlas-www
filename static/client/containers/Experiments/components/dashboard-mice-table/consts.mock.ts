import range from 'lodash/range';

import {PlotXYData} from 'client/components/Plots/components/simple-plot/types';

const getSimplePlotData = () => {
    let visits = 10;
    return range(366)
        .reduce((result: PlotXYData, current: number) => {
            visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
            return result.concat({
                x: new Date(2018, 0, current),
                name: `Name ${current + 1}`,
                y: visits,
            });
        }, []);
};

export const mockTableData = getSimplePlotData();
