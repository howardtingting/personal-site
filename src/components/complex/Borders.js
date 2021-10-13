import React from 'react';
import SimpleLine from '../SimpleLine';
import { defaultProps_ } from '../../utils/typeCheck';
var Borders = function (props) {
    var style = defaultProps_(props);
    /*
    const style = {
      width,
      height,
      position,
      top,
      left,
      right,
      bottom,
      etc.
    }*/
    var horizontalColor = props.color ? props.color : '#9A8541';
    var verticalColor = props.color ? props.color : '#9A8541';
    var leftAnimation = props.animation || 'fadeInLeft';
    var rightAnimation = props.animation || 'fadeInRight';
    var upAnimation = props.animation || 'fadeInUp';
    var downAnimation = props.animation || 'fadeInDown';
    if (props.animation === 'none') {
        leftAnimation = 'unset';
        rightAnimation = 'unset';
        upAnimation = 'unset';
        downAnimation = 'unset';
    }
    else {
        leftAnimation = 'fadeInLeft';
        rightAnimation = 'fadeInRight';
        upAnimation = 'fadeInUp';
        downAnimation = 'fadeInDown';
    }
    var topOptions = {
        direction: 'horizontal',
        top: 1.5,
        width: 1,
        length: style.width,
        color: horizontalColor,
        animationName: leftAnimation,
        animationDuration: style.animationDuration,
    };
    var bottomOptions = {
        direction: 'horizontal',
        bottom: 1.5,
        width: 1,
        length: style.width,
        color: horizontalColor,
        animationName: rightAnimation,
        animationDuration: style.animationDuration,
    };
    var leftOptions = {
        left: 1.5,
        width: 1,
        length: style.height,
        color: verticalColor,
        animationName: upAnimation,
        animationDuration: style.animationDuration,
    };
    var rightOptions = {
        right: 1.5,
        width: 1,
        length: style.height,
        color: verticalColor,
        animationName: downAnimation,
        animationDuration: style.animationDuration,
    };
    var TopBorder = (React.createElement(SimpleLine, { options: topOptions })), BottomBorder = (React.createElement(SimpleLine, { options: bottomOptions })), LeftBorder = (React.createElement(SimpleLine, { options: leftOptions })), RightBorder = (React.createElement(SimpleLine, { options: rightOptions }));
    return (React.createElement("div", null,
        TopBorder,
        BottomBorder,
        LeftBorder,
        RightBorder));
};
export default Borders;
