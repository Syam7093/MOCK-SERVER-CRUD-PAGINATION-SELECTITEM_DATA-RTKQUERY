import React, { useEffect, useState } from 'react'
import { useCreateUserMutation, useDeleteuserMutation, useGetalluserQuery, useUpddateuserMutation } from '../endpoints/allApis'
import { useDispatch, useSelector } from 'react-redux'
import { setNumbers } from '../slices/numberSlice'
// setNumbers

const Search = () => {
    const [formdata,setformdata]=useState({name:"",price:""})
    const [formdata1,setformdata1]=useState({name1:"",price1:""})
    const [show,setshow]=useState(false)
    let [userdata]=useCreateUserMutation();
    let {data: alluser}=useGetalluserQuery();
    let [deleteuser]=useDeleteuserMutation();
    let [updateuser]=useUpddateuserMutation();
    const [Alluser,setalluser]=useState([])
    const [product,setproduct]=useState(null)

    const dispatch=useDispatch()
    const num=useSelector((state)=>state.reusable.number)



    const handlechange1=(e)=>{
        setformdata1({
          ...formdata1,
          [e.target.name]:e.target.value
        })
      }
    console.log(alluser,"alluser")

    

    useEffect(()=>{
        if(alluser)
        {
            setalluser(alluser)
        }
    },[alluser])
    const handlechange=(e)=>{
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value
        })

    }

    const submitdata=async()=>{

        let some={
            name:formdata.name,
            price:formdata.price
        }

        let user=await userdata(some).unwrap()
        console.log(user)
        setformdata({name:"",price:""})

    }
    
    const deleteoneuserof=async(s)=>{
        console.log(s,"syam")

        let deletesome=await deleteuser(s.id).unwrap()
        let usedel=Alluser.filter((e)=>{
            return e?.id!==deletesome?.id
        })
        setalluser(usedel)

    }


const handleupadte=(s)=>{
    console.log(s,",,,")
    setshow(true)
    setformdata1({name1:s.name,price1:s.price})
    setproduct(s)

}

const handlesubmitoned=async()=>{
    let some={
        name:formdata1.name1,
        price:formdata1.price1
      }
    await updateuser({id:product.id,user:some}).unwrap()
    setshow(false)
}
    

  return (
    <div>
        <h1>{num}</h1>
        <button onClick={()=>{
          dispatch(setNumbers({data:true}))
        }}>inc</button>
        <button onClick={()=>{
            dispatch(setNumbers({data:false}))
        }}>Dec</button>
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
submitdata()
      }}>submit</button>
        </div> 


        <table>
            <tr>
                <th>name</th>
                <th>price</th>
                <th>action</th>
            </tr>
            { Alluser?.map((e)=>{
                return (
                    <tr>
                        <td>{e.name}</td>
                        <td>{e.price}</td>
                        <td><button onClick={()=>{
                              handleupadte(e)
                        }}>update</button> <button onClick={()=>{
                            deleteoneuserof(e)
                        }}>delete</button></td>
                    </tr>
                )
            })}
        </table>


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
handlesubmitoned()
      }}>submit</button>
      </div>}
        </div>
    </div>
  )
}

export default Search