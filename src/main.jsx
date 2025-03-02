import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home'
import { ThemeProvider } from './context/theme/ThemeContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<ThemeProvider>
<Home/>
</ThemeProvider>

  </StrictMode>,
)
