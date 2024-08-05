import React, { useEffect, useState } from 'react'
import axios from "axios"
import { deleteoneuserof, getalldata, postdatda, updateuserdata } from '../service/apis'

const Crud = () => {
    const [formdata,setformdata]=useState({name:"",price:""})
    
    const [formdata1,setformdata1]=useState({name1:"",price1:""})
    const [show,setshow]=useState(false)
    const [product,setproduct]=useState(null)

    const [more,setmore]=useState([])
    
    // console.log(Alluser,"alluser")


    const handlechange=(e)=>{
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value
        })

    }


    const handlechange1=(e)=>{
        setformdata1({
          ...formdata1,
          [e.target.name]:e.target.value
        })
      }
    useEffect(()=>{
        getallsome()
    },[more])
    const submit=async()=>{
        let some={
            name:formdata.name,
            price:formdata.price,
        }
        
        let data=await axios.post("http://localhost:8989/users",some);
        console.log(data,"data")
        // setalluser(data)
        setformdata({name:"",price:""})
        
    }

   

    const deleteoneuserofs=async(s)=>{
        let one= await deleteoneuserof(s.id)
        let some=more.filter((e)=>{
            return e!==one
        })
        setmore(some)


    }

    const oneupate=(m)=>{
        console.log(m,"mmmmm")
        setformdata1({name1:m.name,price1:m.price})
        setshow(true)
        setproduct(m)

    }


    const oneuserdata=async()=>{
        let data={
            name:formdata1.name1,
            price:formdata1.price1
        }
        let some=await updateuserdata({id:product.id,user:data})
        

    }


    const postomeos=async()=>{
        
        let some={
            name:formdata.name,
            price:formdata.price,
        }
        let main=await postdatda(some)
    }


    const getallsome=async()=>{
        let one= await getalldata()
        console.log(one,"one---")
        setmore(one.data)
    }

    

    


  return (
    <div>
 <div>
       <div>
        <label>name</label>
        <input name="name" value={formdata.name} onChange={handlechange}  type="text"></input>
      </div>
      <div>
        <label>price</label>
        <input name="price" value={formdata.price} onChange={handlechange} type="text"></input>
      </div>
      <button onClick={()=>{
postomeos()
      }}>submit</button>
        </div> 


        <div>
        <table>
            <tr>
                <th>name</th>
                <th>price</th>
                <th>action</th>
            </tr>
            { more.map((e)=>{
                return (
                    <tr>
                        <td>{e.name}</td>
                        <td>{e.price}</td>
                        <td><button onClick={()=>{
                              oneupate(e)
                        }}>update</button> <button onClick={()=>{
                            deleteoneuserofs(e)
                        }}>delete</button></td>
                    </tr>
                )
            })}
        </table>
        </div>

        <div>
        <div>
        {show &&<div>
      <div>
        <label>name</label>
        <input name="name1" value={formdata1.name1} onChange={handlechange1}  type="text"></input>
      </div>
      <div>
        <label>price</label>
        <input name="price1" value={formdata1.price1} onChange={handlechange1} type="text"></input>
      </div>
      <button onClick={()=>{
oneuserdata()
      }}>submit</button>
      </div>}
        </div>
        </div>
    </div>
  )
}

export default Crud