import range from 'lodash/range';

const LETTERS = '0123456789ABCDEF';

export function getRandomColor() {
    return range(6).reduce((result, _) => {
        return `${result}${LETTERS[Math.floor(Math.random() * 16)]}`;
    }, '#');
}
