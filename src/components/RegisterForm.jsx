
const RegisterForm = () => {

   /* const getData = async () => {
        try {
            const getResponse =  await axios.get('http://localhost:3000/api/blogs/register');
            console.log(getResponse);

            if(!getResponse) throw new Error(`Fetching Data failed, due to:`)

            setUserData(getResponse.data)

        } catch(error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
       getData()
    }, []);*/

    return(
        <div>
            <form className="form" action='/login' method="get">
                <label for="name">Name:</label>
                <input id="name" name="name" />
                <br />
                <label for="email">Username:</label>
                <input id="email" name="email" />
                <br />
                <label for="password">Password:</label>
                <input id="password" name="password" />
                <br />
                <input type="submit" id="submit" value="Submit" />
            </form>
        </div>
    )
}

export default RegisterForm;