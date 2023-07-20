import { createBrowserRouter} from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import App from '../App'
import { About } from '../pages/About'
import { Schedule } from '../pages/Schedule'
import { ScheduleByEvent } from '../pages/ScheduleByEvent'

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        //errorElement: <NotFound/>,
        children: [
            {
                path:'/',
                element: <Home/>,
            },
            {
                path:'/sobre',
                element: <About/>,
            },
            {
                path:'/programacao',
                element: <Schedule/>,
            },
            {
                path:'/programacao/:id',
                element: <ScheduleByEvent/>,
            },
            {
                path:'*',
                element: <NotFound/>,
            }
        ]
    } 
])
