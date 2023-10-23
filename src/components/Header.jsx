// import {Routes, Route, NavLink, Link} from 'react-router-dom';
import {client} from "../client"
import {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import axios from 'axios';
import Loader from "./Loader";


const Header = () => {
    //const [headerContent, setHeaderContent] = useState([]);
    const [userData, setUserData] = useState([])
    const [loader, setLoader] = useState(true);

    /*const cleanUpData = (rawData) => {
        const cleanData = rawData.map((data) => {
            const {sys, fields} = data;
            const {id} = sys;
            const dataTitle = fields.title;
            const dataDescription = fields.description.content[0].content[0].value;
            const dataImg = fields.img.fields.file.url;
            const dataList = fields.list.content[0].content[0].value;
            const updatedData = {id, dataTitle, dataDescription, dataImg, dataList};
            
            return updatedData;
        })
        setHeaderContent(cleanData);
    }

    const getHeaderContent = async () => {
        try{
            const response= await client.getEntries({ content_type: 'travelBlog' });
           console.log(response);
            const responseData = response.items;
            cleanUpData(responseData);
            
        } catch(error){
            console.log(error.message);
        }
    }

    useEffect(() => {
        getHeaderContent()
    }, [])*/
/*proxy in the package of json. With URL of my local server to test the app. Port is the on the server*/
   const getData = async () => {
        try {
            setLoader(!loader);
            const getResponse =  await axios.get('http://localhost:3000/api/blogs');
            
            if(!getResponse) throw new Error(`Fetching Data failed, due to:`)

            setUserData(getResponse.data)
        } catch(error) {
            setLoader(!loader);
            console.log(error.message)
        } finally {
            setLoader(false)
          }
    }

    useEffect(() => {
       getData()
    }, []);
    
    return(
        <>
    
          { loader ? (<Loader />) : null }
          {(Object.keys(userData).length) > 0 ?
                userData.map((article) =>{
                    return (
                        <Link key={article._id} to={`article/${article._id}`}>
                        <div key={article._id} className="article-container">
                          <h2>{article.title}</h2>
                          <img src={article.img.url} className="article-image" alt={article.img.description} />
                          
                        </div>
                        </Link>
                      )
                    })
                    : null
            } 
        
        </>
    )
}

export default Header;