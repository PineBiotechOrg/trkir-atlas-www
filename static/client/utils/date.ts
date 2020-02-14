import {Moment} from 'moment';

export const API_DATE_FORMAT = 'YYYY-MM-DD';

export function prepareMomentToApiDate(date: Moment): string {
    return date.format(API_DATE_FORMAT);
}
