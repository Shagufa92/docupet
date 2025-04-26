import './bootstrap';
import '../css/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ReactDOM from 'react-dom/client';        
import Home from './Page/Home';
import PetForm from './Page/PetForm';
import { PetProvider } from './Contexts/PetContext';

ReactDOM.createRoot(document.getElementById('app')).render(     
    <PetProvider>
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/create" element={<PetForm />} />
            </Routes>
        </Router>
    </PetProvider>
);