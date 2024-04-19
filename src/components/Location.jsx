import {client} from "../client";
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react";
import axios from "axios";
import Loader from "./Loader";

const Location = () => {
    const [article, setArticle] = useState({});
    const {id} = useParams();
    const [userData, setUserData] = useState([]);
    const [loader, setLoader] = useState(true);
    

    /*const getData = async () => {
        try{
            const response= await client.getEntry(id);
            console.log(id);
            const responseData = response.fields;
            console.log(responseData);
            setArticle(responseData);
            
            
            
        } catch(error){
            console.log(error.message);
        }
    }

    useEffect(() => {
        getData()
    }, [id])*/
    const getData = async () => {
        try {
            setLoader(!loader);
            const getResponse =  await axios.get(`https://travel-blog-server-steel.vercel.app/api/blogs/${id}`);
            console.log(getResponse);

            if(!getResponse) throw new Error(`Fetching Data failed, due to:`)

            setUserData(getResponse.data)

        } catch(error) {
            console.log(error.message)
        } finally {
            setLoader(false)
          }
    } 

    useEffect(() => {
       getData()
    }, [id]);
    


    return (
        <>
        { loader ? (<Loader />) : 
        <div className="location-container">
            {(Object.keys(userData).length) > 0 ?        
            <div key={userData._id}>
                <h2>{userData.title}</h2>
                <img src={userData.img.url} className="item-image" alt={userData.img.description} />
                <p>{userData.description}</p>
                {userData.list.map((item, index) => {
                    return(
                        <p key={index}>{item}</p>
                    )
                 }

                )} 

            </div>
                : null}
        </div> }        
        </>                
    )
}

export default Location;