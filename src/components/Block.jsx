import React from 'react';
import styled from 'styled-components';
import { getColors } from '../service/service';

const BlockStyle = styled.div`
    height: 80px;
    width: 80px;
    background-color: #C2B3A3;
    margin: 3px ;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 45px;
    background-color: ${props => props.num && getColors(props.num)};
`;

const Block = ({ num }) => {
    return (
        <BlockStyle num={num}>
            {num === 0 ? '' : num}
        </BlockStyle>
    )
}

export default Block