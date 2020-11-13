import React from 'react';
import styled from 'styled-components';

const CellItem = styled.div`
    height: 300px;
    width: 300px;
    border: 1px solid #000;
`;

const Cell = ({ fillColor }) => {
    return <CellItem style={{background: `rgb(${fillColor.r}, ${fillColor.g}, ${fillColor.b}`}} />
}

export default Cell;