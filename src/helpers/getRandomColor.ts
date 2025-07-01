const colors = [
    '#d18787', '#6db5a0', '#78c1c4', '#5ca0cb',
    '#c177c6', '#b9b380', '#b99f6d', '#d0747d',
    '#7eb1da', '#c680a2', '#b1ae70', '#a1c665',
    '#99c480', '#c88292', '#5cc679', '#7db4c6'
];

export function getRandomColor(): string {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
};