import React from 'react';
import { BgColorsOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';

import RangeItem from './RangeItem';
import Cell from './Cell';

const ChooseColor = ({visible, openModal, closeModal, onSubmit, onCancel, onChange, value}) => {
    return (
        <>
            <Button onClick={openModal} style={{marginLeft: '10px'}}>
                <BgColorsOutlined />
                Choose color
            </Button>
            <Modal
                title="Choose a color"
                visible={visible}
                onOk={onSubmit}
                onCancel={closeModal}
                footer={[
                    <Button key="back" onClick={closeModal}>Cancel</Button>,
                    <Button key="submit" onClick={onSubmit} type="primary">Submit</Button>
                ]}
            >
                <Cell fillColor={value} />
                <RangeItem positionValue={value.r} letter={'r'} onChange={onChange} />
                <RangeItem positionValue={value.g} letter={'g'} onChange={onChange} />
                <RangeItem positionValue={value.b} letter={'b'} onChange={onChange} />
                <Button onClick={onCancel}>Reset</Button>
            </Modal>
        </>
    );
};

export default ChooseColor;