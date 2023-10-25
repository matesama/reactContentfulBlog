import {useState} from 'react';
import {useNavigate, Outlet} from 'react-router-dom';
import Loader from './Loader';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [errors, setErrors] = useState({})

    const getData = async (event) => {
        
        try {
            event.preventDefault();
            setLoader(!loader);
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
                setErrors(data);
               //throw new Error("Credentials Invalid")
                
            }
            sessionStorage.setItem('token', token)
            
            if(token){
                navigate('/');
              }   
        } catch(error) {
            console.log(error.message)
        } finally {
            setLoader(false)
          }
    }
    return(
        <div>
            { loader ? (<Loader />) : 
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
            </form> }
            <div>{Object.keys(errors).length > 0 ? <p>{errors.error}</p> : null}</div>
        </div>
    )
}
export default LoginForm;