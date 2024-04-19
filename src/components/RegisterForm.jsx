import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Loader from './Loader';

const RegisterForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState(false)
    const [errors, setErrors] = useState("");
    
    const clearErrors = () => {
      setErrors({});
    }

    const getData = async (event) => {
        
        try {
          event.preventDefault();
            setLoader(!loader)
    
              

            const requestData = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name, email: email, password: password })
            };
                // custom email regex
              const regex = /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;
              if (!regex.test(email)) {
                console.log(regex.test(email))
                setErrors({error: 'Please insert a valid email format'});
                setTimeout(clearErrors, 2000);
                return;
              }
            
           
            const getResponse =  await fetch('https://travel-blog-server-steel.vercel.app/api/register', requestData);
            const data = await getResponse.json();
            console.log(data);
            setErrors(data.error);
            console.log(errors)
            

            if(!data) throw new Error(`Fetching Data failed, due to:${data.status}`)

          if(!errors){
            navigate('/login');
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
                <h2>Register</h2>
                <div>
                <label htmlFor="name">Name</label>
                <br />
                <input id="name" name="name" onChange={(e)=>{setName(e.target.value)}} required/>
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <input id="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} required/>
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" id="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} required/>
                <br />
                <input type="submit" id="submit" value="Register" />
                <br />
                <input type="button" id="loginButton" value="Login" onClick={()=> navigate('/login')} className="secondaryBtn" />
                </div>
            </form> }
            <div className='errorMessage'>{Object.keys(errors).length > 0 ? <p>{errors}</p> : null}</div>
          
        </div>
    )
}

export default RegisterForm;