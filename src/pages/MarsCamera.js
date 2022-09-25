import React, {useState,useEffect} from "react";
import "./MarsCamera.css"

const MarsCamera = ()=>{
    const [selectName, setSelectName]= useState('')   
    const [selectCameras, setSelectCameras]= useState('') 

    

    const [first,setFirst] = useState('')  // 1 select
    const [second, setSecond]= useState('') // 2 select
    const [valInput, setValInput] = useState('') // Input
    const [result, setResult] = useState('')

    const rovers = [
        {
            name:"curiosity",
            cameras:['fhaz','rhaz','mast','chemcam','mahli','mardi','navcam']
        },
        {
            name:"opportunity",
            cameras:['fhaz','rhaz','navcam','pancam','minites']
        },
        {
            name:"spirit",
            cameras:['fhaz','rhaz','navcam','pancam','minites']
        },
    ];

    useEffect(() => {    
        setSelectName(rovers.map(obj=>(
            <option key = {obj.name} value={obj.name}>{obj.name}</option>
        )))
        setFirst(rovers[0].name)
        setSelectCameras(rovers[0].cameras.map(el => (           // Для начального параметр для 2-го селекта
            <option key={el} value={el}>{el}</option>
        )))
        setSecond(rovers[0].cameras[0])
    }, [])

    useEffect(()=>{
        for (let i = 0; i < rovers.length; i++) {
            if (rovers[i].name === first) {
                setSelectCameras(rovers[i].cameras.map(cameraobj=>(
                    <option key={cameraobj} value={cameraobj}>{cameraobj}</option>
                )))
            }
        }
        console.log('first select: ' + first, 'second select: ' + second);

    },[first])
    
    const handleFirst = (event)=>{
        console.log(event.target.value);
        setFirst(event.target.value)
    }

    const handleSecond = (event)=>{
        console.log(event.target.value);
        setSecond(event.target.value)
    }
    
    const handleInput = (event)=>{
        setValInput(event.target.value)
    }

    const addImg = async (first, valInput, second)=>{
        

        const API_KEY = 'tuHgbvhPQKq9fXJndzahTGMXbjUImNCYgqickaba'
        console.log(first)
        console.log(second)
        console.log(valInput)
        const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${first}/photos?sol=${valInput}&camera=${second}&api_key=${API_KEY}`)

        const data = await response.json()
        console.log(data)
       
        const imgMars = data.photos.map(foto =><div key ={foto.img_src} >
                    <img src = {foto.img_src} alt="foto" className="img-mars " />
                    </div>)
        
            
        setResult(imgMars)
    }



    return(
        <div className="paper">
            <div className="box-in-paper">
                <div className="select-btn">
                    <select value = {first} onChange={handleFirst} className="selectAll">
                        {selectName}
                    </select>
                    <select value = {second} onChange={handleSecond} className="selectAll">
                        {selectCameras}

                    </select>
                    <input onChange = {handleInput} value={valInput} placeholder="Введи время в секундах" className="btn-btn"></input>
                    <button onClick={() => addImg(first, valInput, second)} className="btn">Show Foto</button>
                </div>
                <div className="human">

                </div>

                <div className="box-about-mars">
                    <p className="text-about-mars">Марс — четвёртая по удалённости от Солнца и седьмая по размеру планета Солнечной системы; масса планеты составляет 10,7 % массы Земли. Названа в честь Марса — древнеримского бога войны, соответствующего древнегреческому Аресу
                    <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%80%D1%81#:~:text=%D0%9C%D0%B0%D1%80%D1%81%20%E2%80%94%20%D1%87%D0%B5%D1%82%D0%B2%D1%91%D1%80%D1%82%D0%B0%D1%8F%20%D0%BF%D0%BE%20%D1%83%D0%B4%D0%B0%D0%BB%D1%91%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%BE%D1%82,%D0%B1%D0%BE%D0%B3%D0%B0%20%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B%2C%20%D1%81%D0%BE%D0%BE%D1%82%D0%B2%D0%B5%D1%82%D1%81%D1%82%D0%B2%D1%83%D1%8E%D1%89%D0%B5%D0%B3%D0%BE%20%D0%B4%D1%80%D0%B5%D0%B2%D0%BD%D0%B5%D0%B3%D1%80%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%BC%D1%83%20%D0%90%D1%80%D0%B5%D1%81%D1%83.">...</a>
                    </p>
                </div>
                
                
                
                <div className="img-box">
                    {result}
                </div>
            </div>
          
        </div>
    )



}

export default MarsCamera;