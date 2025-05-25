import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TokenProvider } from './context/TokenContext.tsx'
import { StreamProvider } from './context/StreamContext';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <TokenProvider>
         <StreamProvider>
            <App />
         </StreamProvider>
     </TokenProvider>
  </StrictMode>,
)
