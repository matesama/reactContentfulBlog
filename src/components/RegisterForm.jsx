import {useState} from 'react';
import {useNavigate} from 'react-router-dom';


const RegisterForm = () => {
    const [userData, setUserData] = useState([]); 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
   
    const getData = async (event) => {
        event.preventDefault();
        try {
            const requestData = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name, email: email, password: password })
            };
            const getResponse =  await fetch('http://localhost:3000/api/register', requestData);
            const data = await getResponse.json();
            console.log(data);

            if(!data) throw new Error(`Fetching Data failed, due to:`)
            navigate('/login');
        } catch(error) {
            console.log(error.message)
        }
    }

    

    return(
        <div>
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
            </form>
        </div>
    )
}

export default RegisterForm;