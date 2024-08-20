
import {EventAction , EventState} from '../types/contextType'

export const EventReducer = (state:EventState , action:EventAction):EventState=>{
    switch (action.type) {
        case "ADDEVENT":
          return { ...state, events: [...state.events, action.payload] };
       case "EDITEVENT" :
return{
...state , events: state.events.map((item)=>(
  item.id == action.payload.id ? action.payload :item
))
};

case "DELETEEVENT":
  console.log("Hi from delete")
      return {
        ...state,
        events: state.events.filter((item) => item.id !== action.payload.toString()),
      };

      default:
        return state 

      }
}



