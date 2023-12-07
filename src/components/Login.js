import {useState} from 'react';
import axios from 'axios';

import Header from "../components/Header";

function Login ()
{
      /*useState dans le formulaire + matansach t7ot value fi kol input: value={firstName} + onChange={(e)=>firstName (e.target.value)}*/
        
        const [email,setemail]=useState('')
        const [password, setpassword]=useState('')
        const[accept,setaccept]=useState(false)
        const[emailError,setemailError]=useState('')

          async function Submit(e)
          {
             let flag=true ;
             e.preventDefault() ;
             setaccept(true);
             
    
                if(password.length <8 )
                {
                //ne send pas data 
                flag=false;
                 } 
                 else flag=true;
    
                 try {
    
              if(flag)
              { 
                //send data 
                // npm i axios dans le terminal
                await axios.post("http://127.0.0.1:8000/api/login",
                { 
                email: email ,
                password: password , 
                }).then((t)=>console.log(t)); 
               
                window.localStorage.setItem("email",email);
                window.location.pathname ="/";
               }
        
          } catch (err) {setemailError(err.response.status);}
        
         }
               
       
        return (
          
            <div  className='parent' style={{display:'flex' , alignItems:'center ' ,height:'100vh' ,justifyContent:'center'}}>
              
                <div className='enregistrer'>
    
                    <form style={{display: 'flex', flexDirection: 'column',justifyContent:'center'}}  onSubmit={Submit} >
    
                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="Your email.." id="email" required  value={email} onChange={(e)=> setemail (e.target.value)}/>
                    {emailError === 422 && accept && <p className='error'> email is already taken </p> }
                   
                   
                    <label htmlFor="password">Password:</label>
                    <input type="password" placeholder="Set your password" id="password" required  value={password} onChange={(e)=>setpassword (e.target.value)} />
                    {password.length <8 && accept && <p>password  must be more than 8 char </p> }

                    <div style={{textAlign:'center'}}>
                    <button type='submit'>login</button>
    
    
                </div>
                </form>
                </div>
                </div>
                
                
    
               
            
        );
   
}

export default Login;