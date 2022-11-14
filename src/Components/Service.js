import React,{useContext} from 'react';
import ThemeContext from '../Context';
import Navbar from './Navbar';
import './Common.css'

const Service = () => {

    const {isLight} = useContext(ThemeContext)

  return (
    <>
    <div className={isLight?'light':'dark'}>
        <Navbar/>
        <h1>Our Service are not available</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione enim, ipsa ab consectetur, ex, quae saepe atque deserunt dolor tempore provident perferendis quis consequuntur. Numquam perspiciatis ab reiciendis velit eligendi, nihil in. Maiores reiciendis id provident repellat in expedita quas quidem perspiciatis! Consectetur repudiandae asperiores nisi totam iste, unde ducimus.</p>
    </div>
    
    </>
  )
}

export default Service