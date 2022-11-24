import logo from './logo.svg';
import './App.css';
import Routes from './Routes/Routes';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Routes></Routes>
      <Toaster />
    </div>
  );
}

export default App;
