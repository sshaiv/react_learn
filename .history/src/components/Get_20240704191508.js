import React,{useEffect,useState} from "react"

function Get(){
    const [data,setData]=useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=5')
        .then((result)=>{result.json().then(resp)=>{
            setData
        }})
    })
}
export default Get;