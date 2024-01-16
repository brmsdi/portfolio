import { GalleryImage } from "./GalleryImage"
import { ProjectType } from "./Project"

export type ProjectModalProps = {
    isOpen: boolean,
    onOpen: () => void,
    onOpenChange: () => void,
    projectType: ProjectType,
    galleryImage: GalleryImage
}