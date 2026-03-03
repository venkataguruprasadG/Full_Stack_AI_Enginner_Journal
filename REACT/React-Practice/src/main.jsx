import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// This is the important part: pointing to your new folder
import Project7 from './react-practice-problems/project8/project8.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Project7 />
  </StrictMode>,
)