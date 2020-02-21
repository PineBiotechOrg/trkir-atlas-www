import {SelectValue} from 'antd/lib/select';

export function valueToOptions<T extends SelectValue>(value: T) {
    return {title: value, value};
}

export function arrayToOptions<T extends SelectValue>(items: T[]) {
    return items.map(valueToOptions);
}
