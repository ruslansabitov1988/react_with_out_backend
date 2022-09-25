import React, {useState} from "react";
import ModalReact from "../components/ModalReact"
const Check = ()=>{
    const [openModal, setOpenModal]= useState(false)


    return(
        <div>
            <h1> Wellcom </h1>
            <button className="openModalBtn" 
                onClick={()=>{setOpenModal(true)
                }}
                >
                Open
            </button>

            {openModal && <ModalReact closeModal={setOpenModal}/>}
        </div>
    )
}

export default Check