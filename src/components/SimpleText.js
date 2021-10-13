import React from 'react';
import PropTypes from 'prop-types';
import { defaultProps } from '../utils/typeCheck';
import 'animate.css';
/*
<SimpleText
  content = {"Howard Ting"}
  xPos = {"50vw"}
  yPos = {"50vh"}
/>
*/
var SimpleText = function (props) {
    // USES defaultProps()
    var defaults = {
        width: 0,
        height: 0,
        textContent: 'Place Content Here',
        bgWidth: '100%',
        bgHeight: '100%',
        color: 'white',
        onHover: (function () { }),
        onUnhover: (function () { }),
        fontScale: 1,
        position: 'absolute',
        top: '0',
        bottom: '0',
        right: '0',
        left: '0',
        opacity: '100%',
        click: props.onClick ? true : false,
        cursor: props.onClick ? 'pointer' : 'auto',
        onClick: (function () { console.log("Clicked SimpleText component"); }),
        writingMode: 'horizontal-tb',
        animationName: 'fadeInRight',
        animationDuration: 5,
        animationDirection: 'normal',
        animationIterationCount: 1,
        animationDelay: 0,
        onAnimationEnd: (function () { })
    };
    props = defaultProps(props, defaults);
    var textContent, width, height, bgWidth, bgHeight, color, onHover, onUnhover, fontScale, position, top, bottom, right, left, opacity, click, cursor, onClick, writingMode, animationName, animationDuration, animationDirection, animationIterationCount, animationDelay, onAnimationEnd;
    (textContent = props.textContent, width = props.width, height = props.height, bgWidth = props.bgWidth, bgHeight = props.bgHeight, color = props.color, onHover = props.onHover, onUnhover = props.onUnhover, fontScale = props.fontScale, position = props.position, top = props.top, bottom = props.bottom, right = props.right, left = props.left, opacity = props.opacity, click = props.click, cursor = props.cursor, onClick = props.onClick, writingMode = props.writingMode, animationName = props.animationName, animationDuration = props.animationDuration, animationDirection = props.animationDirection, animationIterationCount = props.animationIterationCount, animationDelay = props.animationDelay, onAnimationEnd = props.onAnimationEnd);
    var style = {
        cursor: cursor,
        color: color,
        userSelect: 'none',
        fontSize: fontScale.toString() + 'em',
        position: position,
        opacity: opacity,
        animationName: animationName,
        animationDuration: animationDuration,
        animationDirection: animationDirection,
        animationIterationCount: animationIterationCount,
        animationDelay: animationDelay,
        writingMode: writingMode
    };
    if (top === '0') {
        if (bottom !== '0') {
            style.bottom = bottom;
        }
        else {
            style.top = top;
        }
    }
    else {
        style.top = top;
    }
    if (left === 0) {
        if (right !== 0) {
            style.right = right;
        }
        else {
            style.left = left;
        }
    }
    else {
        style.left = left;
    }
    return (React.createElement("div", { style: { width: bgWidth, height: bgHeight, top: style.top, position: 'absolute' }, onMouseEnter: onHover, onMouseLeave: onUnhover, onAnimationEnd: onAnimationEnd },
        React.createElement("span", { style: style, onClick: onClick, onAnimationEnd: onAnimationEnd }, textContent)));
};
SimpleText.defaultProps = {
    textContent: 'Place Content Here',
};
SimpleText.propTypes = {
    textContent: PropTypes.string, //.isRequired
};
export default SimpleText;
