import { useEffect, useState } from "react"
 const useProducts =() => {
    const [products,setproducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=> setproducts(data))
    },[])
    return[products, setproducts]
 }
 export default useProducts;