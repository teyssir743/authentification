// Le crochet useState Il vous permet d'ajouter des variables d'état à votre composant et de les mettre à jour, 
import {useState} from 'react';
//axios est une bibliotheque dans react pour effectuer des requette http
//Elle peut être utilisée pour récupérer des données depuis une API, envoyer des données à un serveur et effectuer d'autres tâches liées à HTTP.
import axios from 'axios';

import Header from "../components/Header";

function Signup() 
{
    /*useState dans le formulaire + matansach t7ot value fi kol input: value={firstName} + onChange={(e)=>firstName (e.target.value)}*/
    const [name, setName]=useState('')
    const [email,setEmail]=useState('')
    const [password, setPassword]=useState('')
    const[passwordR,setPasswordR]=useState('')
    const[emailError,setEmailError]=useState('')

    const[accept,setaccept]=useState(false)
            
            //affichage 
            console.log(name);
            console.log(email);
            console.log(password);
            console.log(passwordR);
    
     async function Submit(e)
     {
         let flag=true ;
         e.preventDefault() ;
         setaccept(true);
        //les condition pour accecpter les data
        if(name === "" || password.length <8 ||passwordR!== password)
        {
            //ne send pas data 
            flag=false;
        } 
        else flag=true;

        try {
             console.log("flag",flag);
              //if flag true (data accepter)
             if(flag)
             { console.log("flag");

                 //send data 
                // npm i axios dans le terminal
            
                let res = await axios.post("http://127.0.0.1:8000/api/Register",
                { name:name ,
                  email: email ,
                  password: password , 
                  password_confirmation:passwordR
                }).then((t)=>console.log(t)); 

               console.log(name);
               console.log(email);
               console.log(password);
               console.log(passwordR);

           // ba3ed ma tkml signup yraj3ek lel page home 
           
                window.localStorage.setItem("email",email);
                window.location.pathname ="/";
            
           
          }}
           catch (err) {setEmailError(err.response.status);}
    
     }
           
   
    return (
        <div><Header/>
          <div  className='parent' style={{display:'flex' , alignItems:'center ' ,height:'100vh' ,justifyContent:'center'}}>
         
            <div className='enregistrer'>
                

                <form style={{display: 'flex', flexDirection: 'column',justifyContent:'center'}}  onSubmit={Submit} >


                <label htmlFor="name">First Name:</label>
                <input type="text" placeholder="Your first name.." id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                {name === ""  && accept && <p> username is required </p>}


                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Your email.." id="email" required  value={email} onChange={(e)=> setEmail (e.target.value)}/>
                {emailError === 422 && accept && <p className='error'> email is already taken </p> }
               
               
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="Set your password" id="password" required  value={password} onChange={(e)=>setPassword(e.target.value)} />
                {password.length <8 && accept && <p>password  must be more than 8 char </p> }


                
                <label htmlFor="passwordR">Repeat Password:</label>
                <input type="password" placeholder="Repeat your password" id="repeat" required  value={passwordR} onChange={(e)=>setPasswordR(e.target.value)}/>
                {passwordR !== password && accept && <p> password does not much </p>}

                <div style={{textAlign:'center'}}>
                   <button type='submit'>register</button>
                </div>

               </form>
            </div>
          </div>
          </div>
            

           
       
    );
}

export default Signup;
