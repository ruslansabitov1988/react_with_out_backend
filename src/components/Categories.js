import React,{useState} from "react";

import "./Categories.css"

const Categories = ()=>{
    const [mars,setMars]=useState('')
    const [artist,setArtist]=useState('')

    const handleMars =(event)=>{
        setMars(event.target.value)
    }
    const handleArtist =(event)=>{
        setArtist(event.target.value)
    }


    const marsCamera = ()=>{
        window.location.assign('http://localhost:3000/marscamera')
    }

    const searchArtist = ()=>{
        window.location.assign('http://localhost:3000/artist')
    }




    return(
        <div className="backGround">
            <div className = "content_box">
                <div className="boxMars" value = {mars} onChange={handleMars} onClick={marsCamera}>Mars Camera</div>
                <div className="boxArtist" value = {artist} onChange={handleArtist} onClick={searchArtist} >Search Artist</div>
            </div>
        </div>
        
    )
}

export default Categories;