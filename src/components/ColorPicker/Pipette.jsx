import React from 'react';
import styled from 'styled-components';
import ChooseColor from './ChooseColor';

const PipetteItem = styled.div`
    display: flex;
    font-size: 18px;
`;

const ColorSquare = styled.div`
    height: 20px;
    width: 20px;
    border: 1px solid #000;
    margin: 0 5px;
`;

const ColorText = styled.div`
    display: flex;
    align-items: center;
`;

const Pipette = () => {
    const [value, setValue] = React.useState({r: 0, g: 0, b: 0});
    const [current, setCurrent] = React.useState({r: 0, g: 0, b: 0});
    const [visible, setVisible] = React.useState(false); // modal state

    const onChange = (value, letter) => {
        setValue((prevState) => ({...prevState, [letter]: value}));
    };

    const onSubmit = () => {
        setCurrent(value);
        setVisible(false);
    };
                                                
    const onCancel = () => setValue(current);
    const openModal = () => setVisible(true);
    const closeModal = () => setVisible(false);

    return (
        <PipetteItem>
            <ColorText>
                Current color:
                <ColorSquare style={{ background: `rgb(${current.r}, ${current.g}, ${current.b})` }} />
                {`rgb(${current.r}, ${current.g}, ${current.b})`}
            </ColorText>

            <ChooseColor 
                visible={visible} 
                value={value}
                openModal={openModal}
                closeModal={closeModal}
                onSubmit={onSubmit}
                onCancel={onCancel}
                onChange={onChange}
            />
        </PipetteItem>
    )
}

export default Pipette;