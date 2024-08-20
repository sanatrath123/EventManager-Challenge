import React, {  ReactNode, useReducer } from 'react'
import { createContext } from 'react'
import {EventReducer} from "./eventReducer"
import { EventState} from '../types/contextType'


const initialState:EventState = { events: [
  
  ]
}

const EventContext = createContext<{
    state: EventState;
    dispatch: React.Dispatch<any>;
  }>({
    state: initialState,
    dispatch: () => null
  });

  //event provider wrapper
export const EventProvider = ({children}:{children:ReactNode})=>{

    const [state , dispatch] =useReducer(EventReducer , initialState)
    console.log(state)
    return (
        <EventContext.Provider value={{state, dispatch}}>
{children}
        </EventContext.Provider>
    )
}


export default EventContext

