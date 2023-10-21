import {useState} from 'react';


const RegisterForm = () => {
    const [userData, setUserData] = useState([]); 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
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

            setUserData(data)

        } catch(error) {
            console.log(error.message)
        }
    }

    

    return(
        <div>
            <form className="form" onSubmit={getData}>
                <label htmlFor="name">Name:</label>
                <input id="name" name="name" onChange={(e)=>{setName(e.target.value)}} required/>
                <br />
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} required/>
                <br />
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} required/>
                <br />
                <input type="submit" id="submit" value="Register" />
            </form>
        </div>
    )
}

export default RegisterForm;