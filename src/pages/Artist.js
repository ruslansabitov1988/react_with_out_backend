import React, {useState,useEffect} from "react";

import "./Artist.css"


const Artist = ()=>{
    
    const [inputSearch, setInputSearch] = useState('');
    const [resultImg, setResultImg] = useState('');
    
    const getArtist = async()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f1d641037bmsh805777c136ad783p142fecjsn73217d65f347',
                'X-RapidAPI-Host': 'genius.p.rapidapi.com'
            }
        };
        
        const response = await fetch(`https://genius.p.rapidapi.com/search?q=${inputSearch}`, options)
            const data = await response.json()
            console.log(data)
            const artistSong = data.response.hits.map(song=>
            
            <div key={song.result.header_image_thumbnail_url} className="box-img">
                <img src={song.result.header_image_thumbnail_url} alt="foto" className="img"/>

                <p className="title">{song.result.full_title}</p>
                
                
            </div>
            
            )
            
            setResultImg(artistSong)            

    }

    useEffect(()=>{
        getArtist(inputSearch )
    }, [])

    const handleChange =(event)=>{
        setInputSearch(event.target.value)
    }

    
    return(
        <div className="containerArtist">
            
            <div className="box1">
                <div className="input-btn">
                    <input value={inputSearch} onChange={handleChange} placeholder="Поиск артиста" className="input-box"></input>
                    <button className="btn" onClick={getArtist}>Поиск</button>
                </div>
                
                
                <div className="content">
                    {resultImg}
                </div>
                


            </div>
            
        </div>
            
    )
    
   
}

export default Artist;