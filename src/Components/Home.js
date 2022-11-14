import React, { useContext } from 'react';
import ThemeContext from '../Context';
import Navbar from './Navbar';
import './Common.css';

const Home = () => {

    const { isLight } = useContext(ThemeContext)

    return (
        <>
            <div className={isLight ? 'light' : 'dark'}>
                <Navbar />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis quae ratione natus commodi, adipisci dicta dolore expedita dolor quod consectetur voluptatum earum beatae, excepturi totam explicabo saepe. Dolor nam at sed atque, quos facilis quam, similique esse nisi tempora accusamus harum sapiente dolorum veniam, doloremque ea modi possimus reprehenderit pariatur eum natus aut? Blanditiis magnam iusto quod quam, velit impedit necessitatibus et, excepturi architecto facilis id. Ullam dolorum autem, tenetur, illum aliquid ad ipsa veritatis nostrum vitae dolor amet, voluptatem culpa dolore ut rerum perspiciatis! Beatae adipisci perspiciatis atque perferendis aperiam laudantium porro mollitia vero cumque? Dicta error sunt quaerat.</p>
            </div>
        </>

    )
}

export default Home;