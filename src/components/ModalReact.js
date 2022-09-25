import React, {useState,useEffect} from "react";
import "./ModalReact.css"


const ModalReact = ({closeModal})=>{
    const [log, setLog]= useState("");
    const [pass, setPass] = useState("")
    const [drawUser, setDrawUser] = useState("")
    

    const handlLog = (event)=>{
        setLog(event.target.value)
    }

    const hadlPass = (event)=>{
        setPass(event.target.value)
    }
    let userObj = [
        {   
            id:1,
            login:"rus",
            password:"123"
        },
        {
            id:2,
            login:"nurlan",
            password:"321"
        }
        
    ]
    const singButton =  ()=>{

        // const response = await fetch('http://localhost:8080')
        // const data = await response.json()
        
        // console.log(data)
        // const response = fetch('http://localhost:7000')
        // .then(function (response) {
        //     return response.json()
        // })
        // .then(function (data) {
        //     console.log('data', data)
        // })
        // console.log(response)

        
        
        for (let i = 0; i < userObj.length; i++){
            console.log(userObj)
            if(log === userObj[i].login && pass === userObj[i].password){
                console.log("wellcome")
                const draw = 
                <ul className="modal"> wellcome </ul>
                
                setDrawUser(draw)
               } 
               else if (log === userObj[i].login && pass !== userObj[i].password){
                console.log("error Pass")
                const draw = <ul className="modal"> error  Pass  </ul>
                setDrawUser(draw)
               }
                else if (log !== userObj[i].login && pass === userObj[i].password){
                console.log("error Log")
                const draw = <ul className="modal">
                    error  Log   </ul>
                setDrawUser(draw)
               }
              
        
        }


    }
    useEffect(()=>{
        singButton(drawUser)
    },[])



    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={() => closeModal(false)} className = "btnX">X</button>
                
                <div className="title">
                    <input placeholder="Login..." value={log} onChange={handlLog}></input>
                </div>
                <div className="body">
                    <input placeholder="Password..." value={pass} onChange = {hadlPass}></input>
                </div>
                <div className="footer">
                    <button onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
                    <button onClick={singButton}>Sign up</button>
                    <button>Register</button>
                    
                </div>
                <div className="drawUserBox">
                    {drawUser}
                </div>
            </div>
        </div>
    )
}

export default ModalReact