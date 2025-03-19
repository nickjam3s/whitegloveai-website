
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Set up smooth scrolling for the entire app
document.documentElement.style.scrollBehavior = 'smooth';

createRoot(document.getElementById("root")!).render(<App />);
