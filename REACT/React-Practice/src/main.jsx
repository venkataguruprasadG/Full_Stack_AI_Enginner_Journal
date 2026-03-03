import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// This is the important part: pointing to your new folder
import Project3 from './react-practice-problems/project3/project3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Project3 />
  </StrictMode>,
)