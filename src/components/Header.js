import React from 'react';
import { Link } from 'react-router-dom';
function handleLogOut()
{ window.localStorage.removeItem('email');
    window.location.pathname="/";

}

function Header() {
    return (
        <div className="container">
            <nav className="d-flex">
                <div className="d-flex flex-1">
                   <Link to="/">home</Link>
                   <Link to="/about">about</Link>
                   <Link to="/equipe">equipe</Link>
                    
                </div>

                <div className="d-flex">
                    {!window.localStorage.getItem("email")? (
                        <>
                          <Link to="/register" style={{ textAlign: "center" }} className="registre-nav">register</Link>
                          <Link to="/login" style={{ textAlign: "center" }} className="registre-nav">login</Link>
                        </>
                        
                    
                       ):(<div  className="registre-nav" onClick={handleLogOut} >log out </div>)
                   }
                  
                </div>
            </nav>
        </div>
    );
}

export default Header;
