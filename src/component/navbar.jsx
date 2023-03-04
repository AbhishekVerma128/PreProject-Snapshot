import React, { useContext,useEffect,useState} from 'react'
import axios from 'axios'
import {InputContex} from "../context/inputContex"
export default function Navbar() {
const {setPhotos}= useContext(InputContex)
const [category,setCategory] =useState("all")
const [input, setInput] = useState("")
const [btnInput, setbtnInput] =useState("")
const CatSearch =(event)=>{
setCategory(event.target.innerText)
}
const handleSeach=()=>{
    setbtnInput(input)
}
useEffect(()=>{
    if(category !== 'all'){
        searchImages()
    }
    if(btnInput){
        searchImages()
        
    }
        async function searchImages() {
            const apiKey = 'cb918bd20dc132781278924e63cd44fb';
            let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&format=json&nojsoncallback=1&text=${btnInput}`;
            if (category !== 'all') {
              url += `&tags=${category}`;
            }
            console.log(url);
            await axios.get(url)
              .then(data => {
                console.log(data);
                setPhotos(data.data.photos.photo)
              })
              .catch(error => {
                console.error(error);
              })
        }
    }
,[category,btnInput])

    return (
        <div>
            <div>
                <h1>SnapShot</h1>
                <input type="text" onChange={(e)=>{setInput(e.target.value)}} />
                <button onClick={()=>handleSeach()}><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div id='category'>
                <span onClick={(e)=>CatSearch(e)}>Mountain</span>
                <span onClick={(e)=>CatSearch(e)}>Food</span>
                <span onClick={(e)=>CatSearch(e)}>Travel</span>
                <span onClick={(e)=>CatSearch(e)}>Nature</span>
            </div>
        </div>
    )
}
