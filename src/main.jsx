import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';


async function prepare() {
  if (import.meta.env.MODE === 'development') {
    const { worker } = await import('./mocks/browser');
    await worker.start({
      serviceWorker: {
        url: '/REACT-DUMMY/mockServiceWorker.js'   // <<< ADD THIS!
      }
    });
  }
}

prepare().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});





//** uncomment this for production and delete from line 15 to end */ 

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
