import { IconCloseCircle, IconCloseMenu } from "@root/public/icons"
import { Modal } from "antd"
import { useEffect, useRef, useState } from "react"
import { BoxVideoWrap, ButtonCloseModal, ButtonPlay, ModalButtonPlay, ThumbnailVideo } from "./boxVide.style"

export const BoxVideo = (props: {thumbnail:string,videoUrl:string})=>{ 
    const [isOpen, setIsOpen] = useState(false)

    const OverlayPlayVideo = ()=>(
        <Modal closeIcon={<ButtonCloseModal />} destroyOnClose centered bodyStyle={{background:'#222222'}} footer={null} visible={isOpen} onCancel={()=>setIsOpen(false)}>
            <video controls height={400} width={'100%'}>
                <source src={props.videoUrl} type="video/mp4"/>
            </video>
        </Modal>
    )   

    return (
        <BoxVideoWrap>
            <ModalButtonPlay>
                <a onClick={()=> setIsOpen(true)}>
                    <ButtonPlay/>                
                </a>                
            </ModalButtonPlay>
            <OverlayPlayVideo/>
            <ThumbnailVideo
                src={props.thumbnail}
                alt=""                
                width={"100%"}    
                preview={false}            
            />
        </BoxVideoWrap>
    )
}