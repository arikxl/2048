import React from 'react'
import { swipeDown, swipeLeft, swipeRight, swipeUp } from '../service/move'

const Buttons = ({data, setData}) => {
    return (
        <div>

            <button onClick={e => swipeLeft(data, setData)}>left</button>
            <button onClick={e => swipeRight(data, setData)}>right</button>
            <button onClick={e => swipeUp(data, setData)}>up</button>
            <button onClick={e => swipeDown(data, setData)}>down</button>

        </div>
    )
}

export default Buttons