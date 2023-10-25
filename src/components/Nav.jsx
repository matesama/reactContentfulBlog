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
                <>
                <NavLink className="link" to="/">Home</NavLink>
                <button className="link" onClick={logout}>Logout</button>
                </>
                :
                <>
                <NavLink className="link" to="/login">Login</NavLink>
                <NavLink className="link" to="/register">Register</NavLink>
                </>
                }
            </nav>

            
           
        </div>

    )
}
export default Nav;