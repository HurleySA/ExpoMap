import { createBrowserRouter} from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import App from '../App'

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
                path:'*',
                element: <NotFound/>,
            }
        ]
    } 
])
