import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
