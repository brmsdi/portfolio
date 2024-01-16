import { DEVICE } from "@/app/types/GalleryImage";
import { ProjectModalProps } from "@/app/types/Project-modal";
import {
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter
  } from "@nextui-org/modal";
import { Button } from "@nextui-org/react";

export default function GalleryProject(props: ProjectModalProps) {
    const project = props.projectType
    const gallery = props.galleryImage
    return (
        <>
        <Modal 
        className={`dark`} 
        size={"4xl"} 
        isOpen={props.isOpen} 
        onOpenChange={props.onOpenChange} 
        scrollBehavior={"outside"}
        backdrop={"blur"}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{project.name}</ModalHeader>
              <ModalBody className={`flex flex-col gap-8 p-0`}>
                {
                    gallery.images?.map(item => {
                        switch (item.device) {
                          case DEVICE.MOBILE: return <figure key={item.id} className={`flex flex-col gap-3 mb-4`}>
                            <figcaption className={`font-color-secondary break-words`}>{item.description}</figcaption>
                            <div className={`flex justify-center ẁ-full`}>
                              <img className={`max-w-full md:w-3/5 lg:w-2/5`} src={item.image} alt={item.description} />
                            </div>
                            </figure>
                          default: return <figure key={item.id} className={`flex flex-col gap-3 mb-4`}>
                            <figcaption className={`font-color-secondary break-words`}>{item.description}</figcaption>
                              <img src={item.image} alt={item.description} />
                            </figure>
                        }
                    })
                }
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fechar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> 
      </>
    )
}