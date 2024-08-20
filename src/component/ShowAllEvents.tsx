
import { MdEditNote } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext, useState } from 'react';
import EventContext from "../context/ContextProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import NopostPopup from "./NopostPopup";


const ShowAllEvents = () => {
    const {state , dispatch} = useContext(EventContext)
    const navigate = useNavigate()
    const [noEvent , setError] = useState<boolean>(false)
//handle delete 
const handleDelete = (ID:string)=>{
   dispatch({type:"DELETEEVENT" , payload:ID})
   console.log("clicked" ,ID)
   toast.success("Event Removed")
}

//handle edit
const handleEdit = (ID:string)=>{
navigate(`/edit/${ID}`)
}

//if(!state.events.length) setError(true)

  return (
     <div className="w-full min-h-screen bg-gray-900 flex">
    <div className='flex min-h-[60vh] m-auto md:w-5/12 w-full bg-gray-950 rounded-2xl flex-wrap items-center gap-10 pt-5 relative'>

    
    <h1 className='w-full text-3xl font-bold text-gray-100 text-center mt-4'>DATE 20:08:2024</h1>

<h2 className='w-40 p-3 text-gray-100 rounded-2xl mx-auto text-2xl font-semibold bg-orange-500'>ALL EVENTS</h2>


{
    state.events.map((item)=>(
<div key={item.id} className='w-full flex mb-2 '>
<div className='w-10/12 rounded-2xl mx-auto  min-h-24 flex border-4 border-gray-100 flex-col gap-3 bg-gray-800 relative'>
<div className='flex justify-between px-3 w-full  h-12 items-center'>
<div className='w-7/12 flex items-center gap-2 text-gray-100'>
<span className='w-10 h-10 rounded-full bg-gray-700 text-lg  md:text-2xl font-bold text-center p-1'>{item.date}</span>
<span className='text-xl font-semibold'>Aug 2024</span>
</div>

<div className='w-3/12 p-2 bg-violet-400 h-10 rounded-xl  text-lg md:text-xl font-bold'> {item.time}
</div>
</div>

<p className='md:text-xl md:font-semibold font-medium text-lg text-gray-100 w-full text-center'>{item.event}</p>
</div>

<div className=' flex flex-col justify-between items-center md:pr-4 pr-2'>
<MdEditNote onClick={()=>handleEdit(item.id)} className="cursor-pointer" size={35} color='skyblue'/>
<RiDeleteBin6Line className="cursor-pointer" size={30} color='red'
onClick={()=>handleDelete(item.id)}
/>
</div>
</div>

    ))
}


<button className="w-24 h-12 absolute bg-gray-900 text-gray-100 text-xl font-bold left-2 top-2 rounded-2xl hidden md:flex justify-center items-center"><Link to={'/Callender'}>BACK</Link></button>
    </div>
     </div>
  )
}

export default ShowAllEvents