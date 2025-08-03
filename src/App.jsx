import { useEffect } from 'react';
import Home from './Pages/Home';
import './App.css';
import AOS from 'aos';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Office from './Pages/Office';
import Achievements from './Pages/Achievements';
import 'aos/dist/aos.css';
import Pravachan from './Pages/Pravachan';
import Yoga from './Pages/Yoga';
import Treking from './Pages/Treking';
import China from './Pages/China';
import Discourses from './Pages/Discourses';
import Others from './Pages/Others';

function App() {
  useEffect(() => {
    AOS.init({
        duration: 1000, // Set the animation duration
        easing: 'ease-in-out', // Set the easing method
        once: true // Animation only occurs once
    });
}, []); 

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/achievements" exact element={<Achievements />}></Route>
        <Route path="/office" exact element={<Office />}></Route>
        <Route path="/discourses" exact element={<Discourses/>}></Route>
        <Route path="/china" exact element={<China></China>}></Route>
        <Route path="/pravachan" exact element={<Pravachan/>}></Route>
        <Route path="/yog" exact element={<Yoga/>}></Route>
        <Route path="/trecking" exact element={<Treking/>}></Route>
        <Route path="/others" exact element={<Others/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
