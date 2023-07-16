import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { GlobalStyle } from './style/global.ts'
import {  RouterProvider} from 'react-router-dom'
import { router } from './routes/index.tsx'
import { ThemeProvider } from 'styled-components'
import { theme } from './contexts/colors.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)
