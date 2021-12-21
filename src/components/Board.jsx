import React from 'react';
import styled from "styled-components";
import { useState } from "react";

import Cell from "./Cell";
import {test} from "../service/game";

const BoardStyled = styled.main`
    display: flex;
    background-color: #AD9D8F;
    width: max-content;
    margin: 6.25rem auto;
    padding: .3125rem;
    border-radius: .3125rem;
`;



const Board = () => {

    const [board, setBoard] = useState([
        [1, 2, 3, 4],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]);

    return (
        <BoardStyled>
            {board.map((row, index) => {
                return (
                    <div key={index}>
                        {row.map((digit, idx) => (
                            <Cell key={idx} num={digit} />
                        ))}
                    </div>
                );
            })}
        </BoardStyled>
    )
}

export default Board
