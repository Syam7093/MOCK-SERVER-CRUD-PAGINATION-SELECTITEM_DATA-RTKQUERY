import axios  from "axios"
export const deleteoneuserof=async(id)=>{
    let something=await axios.delete(`http://localhost:8989/users/${id}`)
    
    return something


}


export const updateuserdata=async({id,user})=>{
    let something=await axios.put(`http://localhost:8989/users/${id}`,user)
     return something
}

export const getalldata=async()=>{
    let something=await axios.get(`http://localhost:8989/users`)
    return something
}

export const postdatda=async(user)=>{
    let something=await axios.post(`http://localhost:8989/users`,user)
    return something
}