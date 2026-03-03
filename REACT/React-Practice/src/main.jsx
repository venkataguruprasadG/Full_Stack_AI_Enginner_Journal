import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// This is the important part: pointing to your new folder
import Project4 from './react-practice-problems/project4/project4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Project4 />
  </StrictMode>,
)