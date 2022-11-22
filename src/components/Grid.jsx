import React, { useEffect } from 'react';
import Block from './Block';

import styled from 'styled-components';
import { initialize } from '../service/service';
import { useEvent } from '../hooks/useEvent';
import { swipeDown, swipeLeft, swipeRight, swipeUp } from '../service/move';
// import { handleKeyDown } from '../service/move';

const GridStyle = styled.section`
  width: max-content;
  margin: auto;
  padding: 5px;
  border-radius: 5px;
  margin-top: 10px;
  background-color: grey;
`;

const Grid = ({ data, setData }) => {


    useEffect(() => {
        initialize(data, setData)
    }, [])


    const handleKeyDown = (event) => {
    
        // if (gameOver) {
        //     return;
        // }
        switch (event.keyCode) {
            case 38:
                // console.table(data);
                swipeUp(data, setData);
                // console.table(data);
                break;
            case 40:
                // console.table(data);
                swipeDown(data, setData);
                // console.table(data);
                break;
            case 37:
                // console.table(data);
                swipeLeft(data, setData);
                // console.table(data);
                break;
            case 39:
                // console.table(data);
                swipeRight(data, setData);
                // console.table(data);
                break;
            default:
                break;
        }
    
        // let gameOverr = checkIfGameOver();
        // if (gameOverr) {
        //     setGameOver(true);
        // }
    };
 
    useEvent("keydown", handleKeyDown);

    return (
        <GridStyle>
            {data.map((row, oneIndex) => {
                return (
                    <div style={{ display: 'flex' }} key={oneIndex}>
                        {row.map((digit, index) => (
                            <Block num={digit} key={index} />
                        ))}
                    </div>
                )
            })}
        </GridStyle>
    )
}

export default Grid