import React from 'react';
import Block from './Block';

import styled from 'styled-components';

const GridStyle = styled.section`
  width: max-content;
  margin: auto;
  padding: 5px;
  border-radius: 5px;
  margin-top: 10px;
  background-color: grey;
`;

const Grid = ({data}) => {
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