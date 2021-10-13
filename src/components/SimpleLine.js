import React from 'react';
import 'animate.css';
import '../css/components/SimpleLine.css';
import { defaultProps_ } from '../utils/typeCheck';
/*
USAGE:
EXAMPLE horizontal line with 1px width and 100px length; sits centered 1px from the top of containing div
options = {
  direction: 'horizontal',
  width: '1px',
  length: 100px,
  top: 1px,
  color: 'green',
  animationName: 'fadeIn',
  animationDuration: 0.3,
  animationDirection: animationDirection,
  animationFillMode: 'forwards'
}
<SimpleLine options={options}/>
*/
var SimpleLine = function (props) {
    var excludeTypes = ['width', 'height', 'color'];
    var defaults = defaultProps_(props.options, excludeTypes);
    var position, opacity, top, bottom, right, left, width, height, color, animationName, animationDuration, animationDirection, animationIterationCount, animationDelay, animationFillMode, onAnimationEnd;
    (position = defaults.position, opacity = defaults.opacity, top = defaults.top, bottom = defaults.bottom, right = defaults.right, left = defaults.left, width = defaults.width, height = defaults.height, color = defaults.color, animationName = defaults.animationName, animationDuration = defaults.animationDuration, animationDirection = defaults.animationDirection, animationIterationCount = defaults.animationIterationCount, animationDelay = defaults.animationDelay, animationFillMode = defaults.animationFillMode, onAnimationEnd = defaults.onAnimationEnd);
    props = props.options;
    /* SIMPLELINE ELEMENTS */
    var direction = props.direction ? props.direction : 'vertical';
    if (!(direction === 'horizontal' || direction === 'vertical'))
        direction = 'vertical';
    var length = props.length ? props.length :
        (direction === 'vertical' ? '100vh' : '100vw');
    var xy = direction === 'vertical' ? [width, length] : [length, width];
    var style = {
        position: position,
        background: color,
        opacity: opacity,
        minWidth: xy[0],
        minHeight: xy[1],
        maxWidth: xy[0],
        maxHeight: xy[1],
        overflow: 'hidden',
        animationName: animationName,
        animationDuration: animationDuration,
        animationDirection: animationDirection,
        animationIterationCount: animationIterationCount,
        animationDelay: animationDelay,
        animationFillMode: animationFillMode
    };
    if (top === 0) {
        if (bottom !== 0) {
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
    return (React.createElement("div", { style: style, onAnimationEnd: onAnimationEnd }));
};
export default SimpleLine;
