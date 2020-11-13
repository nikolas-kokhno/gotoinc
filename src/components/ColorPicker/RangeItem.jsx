import React from 'react';
import styled from 'styled-components';

const Range = styled.div`
    color: #222;
`;

const RangeValue = styled.div`
    font-size: 18px;
`;

const RangeItem = ({ letter, positionValue, onChange }) => {
    return (
        <Range>
            <RangeValue>{positionValue}</RangeValue>
            <input 
                type="range" 
                min="0" 
                max="255" 
                step="1" 
                value={positionValue}
                onChange={(e) => onChange(e.target.value, letter)}
            />
        </Range>
    )
}

export default RangeItem;