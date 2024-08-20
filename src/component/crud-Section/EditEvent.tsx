import React, { useEffect, useState , useContext } from 'react'
import { eventType ,Timetype } from '../../types/contextType'
import { useParams , useNavigate} from 'react-router-dom';
import EventContext from '../../context/ContextProvider';
import { toast } from 'react-hot-toast'
//create a unique id by a function
const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
//recent time as default
const deftime = new Date().getHours() +1


const EditEvent = () => {


    //date from paramse 
const {id} = useParams() 


//get the context store
const {state , dispatch} = useContext(EventContext)

const EditEvent = state.events.filter((item)=>(
    item.id == id
))


    //create a default object if user dont change anything
const defalutObj = EditEvent[0]
const [Data , setData] = useState<eventType>(defalutObj)



//handle form submit
const navigate = useNavigate()

const handleAdd = (e:React.MouseEvent<HTMLElement>):void=>{
  dispatch({type:"EDITEVENT" , payload:Data})
  console.log("Event Added")
 toast.success("Event successfully Edited")
  navigate("/showall")
}

//handleDate 
const handleDate = (e:React.ChangeEvent<HTMLInputElement>):void=>{
    if(Number(e.target.value) <= 31){
        setData((prev)=>(
            {...prev , date:e.target.value}
        ))
    }
}

//handle Time 
const realTime = Data.time.split(":")

const [updateTime , setTime ] = useState<Timetype>({hr:realTime[0] , min:realTime[1] ,meridiem:realTime[2]})

const handleTime = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement> , name:string)=>{
setTime((prev)=>(
    {...prev , [name]:e.target.value}
))
}

//handle event change 
const handleEvent = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setData((prev)=>(
        {...prev , event:e.target.value}
    ))
}

useEffect(()=>{
    const newTime = `${updateTime.hr+ ":" + updateTime.min +":"+updateTime.meridiem}`
    setData((prev)=>(
        {...prev , time:newTime }
    ))
},[updateTime])



  return (
    <div className='bg-gray-900 flex min-h-screen backdrop-blur-sm'>
    <div className='w-[340px] lg:w-3/12 min-h-[28rem] border-2 border-gray-100 rounded-2xl m-auto flex flex-wrap justify-center gap-5 items-center text-xl text-gray-800 font-semibold relative bg-gray-800'
    >
<h1 className='text-3xl w-full text-center text-orange-500 mt-0 pt-0 border-b-2 border-gray-100'>EDIT EVENT</h1>


<div className='w-9/12 relative min-h-12 flex justify-center gap-3 pt-10'>
       <span className='text-gray-100 absolute top-0'>SET DATE</span>
       <input type="text" onChange={handleDate} value={Data.date} className='w-3/12  px-2 py-3 rounded-xl bg-gray-300 text-center' 
        placeholder="date"
        />

<div  className='w-5/12  px-2 py-3 rounded-xl bg-gray-300 text-center'>
Aug 2024
</div>

       </div>

       <div className='w-9/12 relative min-h-12 flex justify-evenly pt-10'>
       <span className='text-gray-100 absolute top-0'>SET TIME</span>
       <input type="text" className='w-3/12  px-2 py-3 rounded-xl bg-gray-300 text-center' 
        placeholder='Hr' name='hr' value={updateTime.hr} onChange={(e)=>handleTime(e, "hr")} maxLength={2}
        />

<input type="text" className='w-3/12  px-2 py-3 rounded-xl bg-gray-300 text-center' 
        placeholder='min'  name='min' value={updateTime.min} onChange={(e)=>handleTime(e, "min")} maxLength={2}
        />

        <select className=' rounded-xl w-3/12 bg-gray-300 border-2 border-gray-800  ' name="meridiem" value={updateTime.meridiem}  onChange={(e)=>handleTime(e , "meridiem")}>
            <option  value="am">am</option>
            <option value="pm">pm</option>
        </select>
       </div>
        

<input type="text" className='w-9/12 min-h-12 px-2 py-3 rounded-xl bg-gray-300' 
        placeholder='Enter The Event'
        value={Data.event} onChange={handleEvent}
        />

        <button onClick={handleAdd} className='w-5/12 h-12 rounded-xl bg-green-500 text-gray-100 '>ADD EDITED</button>
    </div>

    </div>



  )
}

export default EditEvent