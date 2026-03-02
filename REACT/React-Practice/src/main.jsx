import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// This is the important part: pointing to your new folder
import Project1 from './react-practice-problems/project1/project1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Project1 />
  </StrictMode>,
)