import React,{useEffect,useState} from "react"

function Get(){
    const [data,setData]=useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=5')
        .then(res=>res.json())
        .then(json=>console.log(json))
    })
}
export default Get;