import React,{useEffect,useState} from "react"

function Get(){
    const [data,setData]=useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=5')
        .then((result)=>{})
    })
}
export default Get;