import { createBrowserRouter} from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import App from '../App'
import { About } from '../pages/About'

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
                path:'*',
                element: <NotFound/>,
            }
        ]
    } 
])
