import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import cloneDeep from "lodash.clonedeep";

import Cell from "./Cell";
import { addNumber } from "../service/game";
import { useEvent } from '../service/utils';
// import { swipeLeft, swipeRight, swipeUp, swipeDown } from "../service/moves";

const BoardStyled = styled.main`
    background-color: #AD9D8F;
    width: max-content;
    margin: 6.25rem auto;
    padding: .3125rem;
    border-radius: .3125rem;
`;

const Board = () => {

    const [board, setBoard] = useState([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]);

    const initGame = () => {
        let newGrid = cloneDeep(board);

        addNumber(newGrid);
        addNumber(newGrid);
        console.table(newGrid);
        setBoard(newGrid);
    };

    useEffect(() => {
        initGame()
        // document.addEventListener('keydown', handleKeyDown)
    }, [])


    const handleKeyDown = (e) => {
        console.log('e:', e.keyCode)

        if (e.keyCode === 37) swipeLeft(board, setBoard)
        // switch (e.keyCode) {
        //     case value:
                
        //         break;
        
        //     default:
        //         break;
        // }
    }

    useEvent('keydown', handleKeyDown);


    const swipeLeft = (board,  setBoard) => {
        console.log("swipe left");
        let oldGrid = board;
        let newArray = cloneDeep(board);
    
        for (let i = 0; i < 4; i++) {
          let b = newArray[i];
          let slow = 0;
          let fast = 1;
          while (slow < 4) {
            if (fast === 4) {
              fast = slow + 1;
              slow++;
              continue;
            }
            if (b[slow] === 0 && b[fast] === 0) {
              fast++;
            } else if (b[slow] === 0 && b[fast] !== 0) {
              b[slow] = b[fast];
              b[fast] = 0;
              fast++;
            } else if (b[slow] !== 0 && b[fast] === 0) {
              fast++;
            } else if (b[slow] !== 0 && b[fast] !== 0) {
              if (b[slow] === b[fast]) {
                b[slow] = b[slow] + b[fast];
                b[fast] = 0;
                fast = slow + 1;
                slow++;
              } else {
                slow++;
                fast = slow + 1;
              }
            }
          }
        }
        if (JSON.stringify(oldGrid) !== JSON.stringify(newArray)) {
          addNumber(newArray);
        }
        if (board) {
          return newArray;
        } else {
          setBoard(newArray);
        }
    };

    return (
        <BoardStyled>
            {board.map((row, index) => {
                return (
                    <div key={index} style={{ display: 'flex' }}>
                        {row.map((digit, idx) => (
                            <Cell key={idx} num={digit} />
                        ))}
                    </div>
                );
            })}
        </BoardStyled>
    );
};

export default Board; 
