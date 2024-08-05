import React, { useEffect, useState } from 'react'
import axios from "axios"

const Pagination = () => {
    const [show,setshow]=useState([])
    useEffect(()=>{
        showdata()
    },[])

    const [currentpage,setCurrentPage]=useState(1)
    const initialpages=3

    const indexoflast=currentpage*initialpages
    const indexoffirst=indexoflast-initialpages

    const currentpagesof=show.slice(indexoffirst,indexoflast)

    const showdata = async () => {
        const data = await axios.get('https://fakestoreapi.com/products');
        setshow(data.data);
      };

      const number=[]
      for(let i=1;i<show.length/initialpages;i++)
      {
        number.push(i)
      }

      console.log(number,"number----")


      const handldeprev=()=>{
        if(currentpage>1){
            setCurrentPage(currentpage-1)
        }
      }

      const handldenext=()=>{
        if(currentpage<number.length){
            setCurrentPage(currentpage+1)
        }
      }
  return (
    <div>
        
        {
            currentpagesof.map((e)=>{
                return (
                    <div>
                        <h1>{e.price}</h1>
                        <img src={e.image} height="30px" width="40px"></img>
                    </div>
                )
            })
        }

        <div>
            <button onClick={()=>{
                handldenext()
            }}>next</button>
            {number.map((e)=>{
                return(
                    <button disabled={currentpage==e} onClick={()=>{
                        setCurrentPage(e)
                    }}>{e}</button>
                )
            })}

         
        </div>
        <button onClick={()=>{
            handldeprev()
        }}>prv</button>
    </div>
  )
}

export default Pagination