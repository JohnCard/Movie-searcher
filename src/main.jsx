import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MovieSearch } from './MovieSearch'
import './styles/search.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieSearch/>
  </StrictMode>,
)
