import {useState} from 'react';
import {useNavigate, Outlet} from 'react-router-dom';
import ProtectedRoutes from '../ProtectedRoute';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const getData = async (event) => {
        event.preventDefault();
        try {
            const requestData = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({email: email, password: password })
            };
            const getResponse =  await fetch('http://localhost:3000/api/login', requestData);
            const data = await getResponse.json();
            console.log(data);
            const token = data.token;
            if(!token) {
                alert("Credentials Invalid");
                throw new Error(`credentials invalid`);
                
            }

            sessionStorage.setItem('token', token)
            navigate('login');    
        } catch(error) {
            console.log(error.message)
            alert('Credentials invalid')
        }
    }
    return(
        <div>
            <form className="article-container" onSubmit={getData}>
                <h2>Login</h2>
                <div>
                <label htmlFor="email">Email</label>
                <br />
                <input id="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} required/>
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" id="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} required/>
                <br />
                <input type="submit" id="submit" value="Login" />
                <br />
                <input type='button' id='button' value='Register' onClick={() => navigate('/register')} className='secondaryBtn' />
                </div>
            </form>
        </div>
    )
}
export default LoginForm;