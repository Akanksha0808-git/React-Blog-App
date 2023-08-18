import React from 'react'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import Navbar from './NavComponents/Navbar';
import Home from './NavComponents/Home';
import Bollywood from './NavComponents/Bollywood';
import Technology from './NavComponents/Technology';
import Hollywood from './NavComponents/Hollywood';
import Fitness from './NavComponents/Fitness';
import Food from './NavComponents/Food';
import DataStore from './ContextAPI/DataStore';
import DetailPage from './NavComponents/DetailPage';
const RouteFiles =()=>{
    return(
        <BrowserRouter>
        <Navbar />
        <DataStore>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Bollywood" element={<Bollywood />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="/Hollywood" element={<Hollywood />} />
          <Route path="/Fitness" element={<Fitness />} />
          <Route path="/Food" element={<Food />} />
         <Route path="/detailpage/:id" element={<DetailPage/>}/>
        </Routes>
        </DataStore>
      </BrowserRouter>
    )
}
export default RouteFiles