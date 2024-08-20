import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {EventProvider} from "./context/ContextProvider.tsx"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Add from './component/crud-Section/Add.tsx'
import ShowAllEvents from './component/ShowAllEvents.tsx'
import EditEvent from './component/crud-Section/EditEvent.tsx'
import Callender from './component/calender/Calender'
import { Toaster } from 'react-hot-toast'
import NopostPopup from './component/NopostPopup.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"addevent/:date",
    element:<Add/>
  },
  {
    path: "/showall", 
    element: <ShowAllEvents />
  },
  {
    path:'/edit/:id',
    element: <EditEvent/>
  },
  {
    path:'/Callender',
    element: <Callender/>
  },
  {
    path:'/abb',
    element:<NopostPopup/>
  }
  
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EventProvider>
    <RouterProvider router={router} />
    <Toaster />
    </EventProvider>
  </StrictMode>,
)


