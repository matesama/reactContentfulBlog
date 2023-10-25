import {NavLink, useNavigate} from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();

    const isAuthenticated =  sessionStorage.getItem('token');

    const logout = () => {
    sessionStorage.removeItem('token');
    navigate('login')
}
    
    
    return (
        <div className="navigation">
            <nav>
                {isAuthenticated ?
                 <div className="link-container">
                <button className="link" onClick={logout}>Logout</button>
                </div>
                :
                null
                }
            </nav>

            
           
        </div>

    )
}
export default Nav;