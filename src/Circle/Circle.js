import React from 'react';
import './Circle.css';

const Circle = props => {
    return (
        <div
        className={'circle' + (props.highlighted ? ' highlighted' : ' ')}
        onClick={props.click}
        style={{
            backgroundColor : props.highlighted ? props.highlighted : props.mydefaultcolor,
        }}
        ></div>
    );
};

export default Circle;
