import React, { useEffect, useRef, useState , useContext } from 'react'
import { MdEvent } from "react-icons/md";
import "./calender.css"
import Popup from './Popup'
import EventContext from '../../context/ContextProvider';
import { Link } from 'react-router-dom';

const Callender = () => {

  //this for calender date set
  const startDay = 3; 
  const daysInMonth = 30;
  const d = new Date();
  //state variaables 
const [today , setDate] = useState(d.getDate())
const [clikedDate , setCliked ] = useState<number>()
//const popupActive = useRef<number>()
const [popup, setPopup] = useState<number>()

//handle the active date 
const handleActive = (date:number)=>{
console.log("cliked bhai")
if(popup== date) return 
  setPopup(date)

// if(popupActive.current == date){
//   if(popupActive.current == date) popupActive.current= undefined
//   return
// }
// popupActive.current = date
}


const {state , dispatch} = useContext(EventContext)
//filter the dates 
const scheduledDate = state.events.map((item)=>(
 Number( item.date)
))



  return (
    <div className='w-full flex justify-center items-center flex-wrap  border-2 border-gray-100 bg-gray-900 min-h-screen'>
<div className='lg:w-7/12 w-full md:relative justify-center font-bold text-3xl text-cyan-500 flex  xl:mx-32'>
<h1 className='md:text-inherit md:font-bold md:text-3xl text-xl font-semibold mt-3 ' >Add Your Event In The Calender</h1>

<Link to={'/showall'}><MdEvent className='absolute md:right-6 top-2 right-3 cursor-pointer' size={40} color='red'/></Link>
</div>
      {/* callender  */}
      <div className='calendar-container lg:w-[800px] w-10/12 min-h-[60vh] rounded-2xl border-2 border-gray-100 relative'>
<h1 className=' absolute text-2xl top-[-43px] left-8  text-gray-100 p-2'>August</h1>
  <div className="calendar-header">
    <div>Sun</div>
    <div>Mon</div>
    <div>Tue</div>
    <div>Wed</div>
    <div>Thu</div>
    <div>Fri</div>
    <div>Sat</div>
  </div>

  {/* Calendar Grid (Dates) */}
  <div className="calendar-grid ">
    {Array.from({ length: 35 }).map((_, i) =>{
const actualDate = i-startDay;
      if(actualDate== today) {
        return  <div className={`bg-cyan-400 ${scheduledDate.includes(actualDate) && "bg-green-400"} rounded-6xl text-gray-800 flex relative z-10`} key={i}  onClick={()=>handleActive(today)}>
        <span className='w-full text-center absolute top-2 text-xl text-gray-800 font-bold'>{today}</span>
        <span className='absolute bottom-2 text-gray-800 font-bold'>Today</span>
        {popup==today && <Popup data={today } active = {true}/>}
       </div>
      }
   return   <div className={`${scheduledDate.includes(actualDate) ?"bg-green-500 text-gray-900 font-bold text-lg" : 'text-gray-100'}`} key={i} onClick={()=>handleActive(i-startDay)}>
      {startDay < i  ? actualDate : ""}
      {(popup==actualDate && actualDate<daysInMonth) &&<Popup data={actualDate} active={true}/>}
     </div>
    })}
    </div>
    </div>
    </div>
  )
}

export default Callender