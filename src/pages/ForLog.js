import React, {useState} from "react";

const ForLog = ()=>{
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
   

    const singButton =()=>{
        
        
        for (let i = 0; i < userObj.length; i++){

            console.log(userObj)


            if(log === userObj[i].login && pass === userObj[i].password){
                console.log("wellcom")
                const draw = 
                <div className="modal"> wellcom 
                                <button>Log Out</button>
                                </div>
                setDrawUser(draw)
               } 
               if (log === userObj[i].login && pass !== userObj[i].password){
                console.log("error Pass")
                const draw = <div className="modal"> error  Pass  </div>
                setDrawUser(draw)
               }
                if (log !== userObj[i].login && pass === userObj[i].password){
                console.log("error Log")
                const draw = <div className="modal">
                    error  Log   </div>
                setDrawUser(draw)
               }
              
        
        }


    }


    return(
        <div className="container">
           
            


            <div className="box">
                {drawUser}
                <input className="input" placeholder="Login" value = {log} onChange = {handlLog}></input>
                <input className="input" placeholder="Password" value = {pass} onChange={hadlPass}></input>
                <button className="button" onClick={singButton}>Sign Up</button>

            
                
            
            </div>
        </div>
        
    )
}

export default ForLog