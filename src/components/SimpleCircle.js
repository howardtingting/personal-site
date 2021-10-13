import React from 'react';
import 'animate.css';
import { defaultProps_ } from '../utils/typeCheck';
var SimpleCircle = function (props) {
    props = defaultProps_(props.options);
    var position, cursor, opacity, top, bottom, right, left, width, height, color, borderStyle, borderWidth, animationName, animationDuration, animationDirection, animationIterationCount, animationDelay, animationFillMode, onAnimationEnd, onClick, windowType, zIndex;
    (position = props.position, cursor = props.cursor, opacity = props.opacity, top = props.top, bottom = props.bottom, right = props.right, left = props.left, width = props.width, height = props.height, color = props.color, borderStyle = props.borderStyle, borderWidth = props.borderWidth, animationName = props.animationName, animationDuration = props.animationDuration, animationDirection = props.animationDirection, animationIterationCount = props.animationIterationCount, animationDelay = props.animationDelay, animationFillMode = props.animationFillMode, onAnimationEnd = props.onAnimationEnd, onClick = props.onClick, windowType = props.windowType, zIndex = props.zIndex);
    var centerX = "calc(50vw - " + parseInt(width) / 2 + "px)";
    var centerY = "calc(50vh - " + parseInt(height) / 2 + "px)";
    var bottomY = "calc(100vh - " + (parseInt(height) + 20) + "px)";
    var style = {
        position: 'absolute',
        cursor: cursor,
        top: bottomY,
        left: centerX,
        width: width,
        height: height,
        opacity: opacity,
        animationName: animationName,
        animationDuration: animationDuration,
        animationDirection: animationDirection,
        animationIterationCount: animationIterationCount,
        animationDelay: animationDelay,
        animationFillMode: animationFillMode,
        borderRadius: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: zIndex
    };
    if (props.fill) {
        style.backgroundColor = color;
    }
    else {
        style.borderStyle = borderStyle;
        style.borderWidth = borderWidth;
        style.borderColor = color;
    }
    return (React.createElement("div", { style: style, onClick: onClick },
        React.createElement("span", { style: { color: 'white' } }, props.content)));
};
export default SimpleCircle;
