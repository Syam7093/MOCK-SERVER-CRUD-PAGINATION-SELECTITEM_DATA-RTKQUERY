import React, { useEffect, useState } from 'react'
import axios  from 'axios'

const SelectedItem = () => {

    const [products,setproducts]=useState([])
    const [selectproduct,setselectproduct]=useState("")
    
    useEffect(()=>{
        somedaata()
    },[])
    
    const somedaata=async()=>{
      let data=await axios.get("https://dummyjson.com/recipes")
      console.log(data.data.recipes,"ppppppp")
      setproducts(data.data.recipes)
    }


    const somes=products.find((e)=>{
        return e.id== selectproduct
    })
    console.log(somes,"somes.........")


    
  return (
    <div>
       <select  onChange={(e)=>{setselectproduct(e.target.value)}}>
        <option value="">Select</option>
        {products.map((e)=>{
            return (
                <option value={e.id}>{e.name}</option>
            )
        })}
        </select> 

        <div>
           {somes?.tags?.map((e)=>{
            return (
                <li>{e}</li>
            )
           })}
        </div>
    </div>
  )
}

export default SelectedItem