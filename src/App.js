import React, {useState} from "react";
import ThemeContext from './Context';
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Service from "./Components/Service";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  const [isLight, setIsLight] = useState(true)
  
  const changeTheme = () => {
    setIsLight((prevState) => {
      return !prevState

    })
  }

  return (
    <BrowserRouter>
    <ThemeContext.Provider value={{isLight,changeTheme}}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>

    </ThemeContext.Provider>
    
    </BrowserRouter>
  );
}


export default App;
