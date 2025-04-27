
import { useEffect, useState } from 'react'
import { fetchPicturesWithTopic } from '../articles-api'

import './App.css'

function App() {

    const [pictures, setPictures] = useState(0);

    useEffect(()=> {
        async function getPictures () {
            const response = await fetchPicturesWithTopic('cat');
            console.log(response.data.results) 
            setPictures(response.data.results)   
        }
        getPictures();
        
    },[])

    return (
        <>
        { pictures.length > 0 && pictures.map((picture) => {
            return (
            <ul>
                   <li key={picture.id}>
                <img src={picture.urls.regular} alt="" />
            </li>
            </ul>
            )
        })}
        </>
    )
 

  
}

export default App
