
//event types
export interface eventType {
    id:string,
    date: string | undefined,
    time: string,
    event: string
}

//store data

export  type EventState = { events: eventType[] };

//this used for actions
export type EventAction =
  | { type: "ADDEVENT"; payload: eventType }
  | { type: "EDITEVENT"; payload: eventType }
  | { type: "DELETEEVENT"; payload: number };


  //time type 
  export interface Timetype {
    hr: string,
    min:string,
    meridiem: string
  }