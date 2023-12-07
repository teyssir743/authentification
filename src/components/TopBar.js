import {Link} from "react-router-dom";


function TopBar()
{
    return(<div className="container">
        <h1>store</h1>
        <div className="t-flex" ><Link to="/" className="registre-nav ">go to web site</Link> </div>
       
     </div>);
}

export default TopBar;