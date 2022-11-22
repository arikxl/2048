import React, { useState } from 'react'
import Buttons from '../components/Buttons';
import Grid from '../components/Grid'
import { swipeDown, swipeLeft, swipeRight, swipeUp } from '../service/move';

const Home = () => {


    const [data, setData] = useState([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]);

    return (
        <div>
            <Grid data={data} setData={setData}/>

            <Buttons data={data} setData={setData}/>



        </div>
    )
}

export default Home