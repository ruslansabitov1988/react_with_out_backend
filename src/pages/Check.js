import React, {useState} from "react";
import ModalReact from "../components/ModalReact"
import "./Check.css"
const Check = ()=>{
    const [openModal, setOpenModal]= useState(false)


    return(
        <div className="check-tab">
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