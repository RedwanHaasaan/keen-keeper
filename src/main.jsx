import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App'
import KeeperContaxtProvider from './context/KeeperContaxtProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KeeperContaxtProvider>
      <App />
    </KeeperContaxtProvider>
  </StrictMode>,
)
