export const prefix = 'ltw';

export const classes = {
    button: 'button',
    card: 'card',
    cardDescription: 'card-description',
    divider: 'divider',
} as const;

export function getClassName(key: keyof typeof classes) {
    return `${prefix}-${classes[key]}`;
}
