import React from 'react';
import styled from "styled-components";

const CellStyled = styled.section`
    height: 5rem /* 80px -> 5rem */;
    width: 5rem /* 80px -> 5rem */;
    background-color: lightgrey;
    margin: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.8125rem /* 45px -> 2.8125rem */;
    font-weight: 800;
    color: white;
`;

const Cell = ({ num }) => {
    return (
        <CellStyled style={{color: num === 2 || num === 4 ?'red' : 'green'}}>
            {num !== 0 ? num : ""}
        </CellStyled>
    )
}

export default Cell
