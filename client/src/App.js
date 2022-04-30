import './App.css';
import {Routes, Route} from 'react-router-dom';

// Router
import MainPage from './pages/MainPage';

function App() {
    return (<Routes>
        <Route path="/" element={<MainPage />}/>
    </Routes>);
}

export default App;
