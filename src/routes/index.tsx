// @ts-nocheck
import { createBrowserRouter} from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import App from '../App'
import { About } from '../pages/About'
import { Schedule } from '../pages/Schedule'
import { ScheduleByEvent } from '../pages/ScheduleByEvent'
import { DetailsByEvent } from '../pages/DetailsByEvent'
import { ParticipateEvent } from '../pages/Participate'
import { LoginForm } from '../pages/Login'
import { SolicitationsPage } from '../pages/Solicitations'
import { FormAdministrator } from '../components/FormAdministrator'
import { CompleteSolicitation } from '../pages/CompleteSolicitation'

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
                path:'/detalhes/:id',
                element: <DetailsByEvent/>,
            },
            {
                path:'/participate',
                element: <ParticipateEvent/>,
            },
            {
                path:'/complete/solicitation/:id',
                element: <CompleteSolicitation/>,
            },
            {
                path:'*',
                element: <NotFound/>,
            }
        ]
    },
    {
        path:'/admin/login',
        element: <LoginForm/>,
    },
    {
        path:'/admin/solicitations',
        element: <SolicitationsPage/>,
    }
])
