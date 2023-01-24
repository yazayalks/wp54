export type GalleryType = {
    title: string,
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
    text: string;
    placeholder: string;
    name: string;
}