import React from 'react';
import styled from 'styled-components';

const BlockStyle = styled.div`
    height: 80px;
    width: 80px;
    background: lightGray;
    margin: 3px ;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 45px;
`;

const Block = ({ num }) => {
    return (
        <BlockStyle>
            {num}
        </BlockStyle>
    )
}

export default Block