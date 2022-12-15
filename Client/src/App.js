import './App.css';

import {Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Optiweight from './Components/TrainingTools/Optiweight/Optiweight';


function App() {



  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/Optiweight' element={<Optiweight/>}></Route>

  
      </Routes>
    </div>
  );
}

export default App;
