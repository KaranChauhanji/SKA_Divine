
import AdminLogin from './Components/AdminLogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

const App = () => {

  return (
    <BrowserRouter>
     <Routes>
       <Route path="/admin" element={<AdminLogin />} />
       <Route path= '/' element={<Home />} />
     </Routes>
      </BrowserRouter>
  );
};

export default App;
