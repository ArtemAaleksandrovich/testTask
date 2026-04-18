export interface Product {
    id: number,
    title: string,
    price: number,
    category: Category,
    image: string,
    description: string,
}

export const Category = {
    ALL: 'Все',
    CLOCK: 'Часы',
    HEADPHONE: 'Наушники',
    TABLET: 'Планшеты',
} as const;

export type Category = typeof Category[keyof typeof Category];
