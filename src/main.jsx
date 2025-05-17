import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Goods } from './pages/Goods/Goods'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Goods />
  </StrictMode>,
)
