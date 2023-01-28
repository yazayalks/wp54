export type GalleryType = {
    title: Pages,
    description: string,
    path: string
    items:  Array<GalleryItemType>,
}

export type GalleryItemType = {
    id: number,
    name: string,
    title?: string,
    description?: string,
}

export type ContactInputType = {
    type: string;
    title: string;
    text: string;
    placeholder: string;
    name: string;
}

export enum  Pages {
    Main = 'Main',
    Hall = 'Hall',
    Game = 'Game',
    Discos = 'Discos',
    Parties = 'Parties',
    Corporate = 'Corporate',
    Birthdays = 'Birthdays',
    Movies = 'Movies',
    Equipment = 'Equipment',
    Karaoke = 'Karaoke',
    Projector = 'Projector',
    Hookah = 'Hookah'
}