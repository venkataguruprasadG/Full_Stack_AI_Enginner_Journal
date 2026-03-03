import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// This is the important part: pointing to your new folder
import Project2 from './react-practice-problems/project2/project2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Project2 />
  </StrictMode>,
)