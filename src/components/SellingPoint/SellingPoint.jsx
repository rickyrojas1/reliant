/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './SellingPoint.scss';

const SellingPoint = (props) => (
  <div className="point">

    <h1 onClick={props.logThisValue}>
      {props.title}
    </h1>

    <p>
      {props.bodyText}
    </p>
  </div>
);

export default SellingPoint;
