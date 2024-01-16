export enum DEVICE {
    COMPUTER = 0,
    MOBILE = 1
}

type Image = {
    id: number,
    image: string,
    device: DEVICE,
    description: string
}
export type GalleryImage = {
    id: number,
    full_name: string,
    images: Image[]
}