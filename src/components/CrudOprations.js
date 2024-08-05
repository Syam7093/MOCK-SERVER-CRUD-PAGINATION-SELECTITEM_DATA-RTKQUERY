import React, { useState } from 'react'

const CrudOprations = () => {
    const [formdata,setformdata]=useState({name:"",price:""})
    const [data,setdata]=useState([])
    const [show,setshow]=useState(false)

    const [one,setone]=useState()

    const handlechange=(e)=>{
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value
        })

    }

    const [formdata1,setformdata1]=useState({name1:"",price1:""})
    

    const handlechange1=(e)=>{
        setformdata1({
            ...formdata1,
            [e.target.name]:e.target.value
        })

    }

    const handlesubmit=()=>{
        setdata([...data,{name:formdata.name,price:formdata.price}])
        setformdata({name:"",price:""})

    }

    const handledelete=(s)=>{
        let datas=data.filter((e)=>{
            return e!==s
        })
        setdata(datas)

    }

    const handlesumitone=(d)=>{
        console.log(d,"ddddddddd")
        setformdata1({name1:d.name,price1:d.price})
        setshow(true)
        setone(d)

    }

    const handlesubmits=()=>{
        let main={
            name:formdata1.name1,
            price:formdata1.price1
        }
        let sss=data.map((e)=>{
            if(e===one)
            {
                return main
            }
            return e
        })

        setdata(sss)
        setshow(false)
    }
  return (
    <div>
        <div>
            <label>name</label>
            <input name="name" value={formdata.name} onChange={handlechange} type="text"></input>
        </div>
        <div>
            <label>price</label>
            <input name="price" value={formdata.price}  onChange={handlechange} type="text"></input>
        </div>
        <button onClick={()=>{
            handlesubmit()
        }}>submit</button>

        <div>
            <table>
                <tr>
                    <th>name</th>
                    <th>price</th>
                    <th>action</th>
                </tr>
                {data.map((e)=>{
                    return(
                        <tr>
                            <td>{e.name}</td>
                            <td>{e.price}</td>
                            <td><button onClick={()=>{
                                handlesumitone(e)
                            }}>update</button><button onClick={()=>{
                                handledelete(e)
                            }}>delete</button></td>
                        </tr>
                    )
                })}
            </table>
        </div>

       {show && <div>
        <div>
            <label>name</label>
            <input name="name1" value={formdata1.name1} onChange={handlechange1} type="text"></input>
        </div>
        <div>
            <label>price</label>
            <input name="price1" value={formdata1.price1}  onChange={handlechange1} type="text"></input>
        </div>
        <button onClick={()=>{
          handlesubmits()
        }}>submit</button>

        </div>}
    </div>
  )
}

export default CrudOprations