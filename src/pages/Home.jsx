import React, { useState } from 'react'
import Grid from '../components/Grid'

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
        </div>
    )
}

export default Home