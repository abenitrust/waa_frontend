import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes/routes';

import './index.css';


const root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
       {AppRoutes}
    </BrowserRouter>
);


