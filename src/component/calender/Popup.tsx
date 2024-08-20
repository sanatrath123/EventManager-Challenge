import React, { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

interface props {
    data:number,
    active:boolean
}


const Popup:React.FC<props> = ({...props})=>{
const {data , active} = props
    const [show , setShow] = useState(active)


    //reference of top div
    const divref = useRef(null)
    if(data <1) return
    //add a toast function later

//handle click outside div
const handleClick = (e:React.FormEvent<HTMLElement>)=>{
    if(divref.current === e.target){
        setShow(!show)
        return
       }
}

const HidePopup = ()=>{
    setShow(false)
}

    return(
    <>
       {
        show &&  <div ref={divref} onClick={handleClick}  className="fixed md:top-40 md:bottom-40 md:left-80 md:right-80 inset-9 backdrop-blur-md z-20">
        
        < RxCross2 className="absolute top-8 right-8" onClick={HidePopup} color="red" size={50}/>
        
        <div className=" md:w-60 md:h-52  w-40 bg-sky-400 flex flex-col gap-3 items-center justify-center rounded-2xl">
            
            <h1 className="text-xl text-gray-100 font-bold">DATE:{data}/08/2024</h1>
            <button className="w-10/12 h-12 p-2 rounded-xl bg-green-300 text-md font-semibold "><Link to={`/addevent/${data}`}>ADD EVENT</Link></button>
            <button className="w-10/12 h-12 p-2 rounded-xl bg-violet-500 text-md font-semibold"><Link to="/showall">SHOW ALL</Link></button>
        
    </div>
    </div>
       }</>
    )
}

export default Popup

