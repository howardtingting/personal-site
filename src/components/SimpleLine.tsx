//horizontal and vertical lines
import * as IFs from '../interfaces/interfaces';
import React from 'react';
import 'animate.css';
import '../css/components/SimpleLine.css';
import { defaultProps } from '../utils/typeCheck';
import { useState } from 'react';

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

const SimpleLine: React.FC<IFs.AnyJSON> = (props) => {
  const excludeTypes = ['width', 'height', 'color'];
  const defaults = {
    position: 'absolute',
    opacity: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: 0,
    height: 0,
    color: 'white',
    animationName: 'none',
    animationDuration: 1,
    animationDirection: 'normal',
    animationIterationCount: 1,
    animationDelay: 0,
    animationFillMode: 'both',
    onAnimationEnd: () => {},
  }
  props = defaultProps(props, defaults);
  let position, opacity, top, bottom, right, left, width, height, color, animationName, animationDuration, animationDirection, animationIterationCount, animationDelay, animationFillMode, onAnimationEnd;
  ({ position, opacity, top, bottom, right, left, width, height, color, animationName, animationDuration, animationDirection, animationIterationCount, animationDelay, animationFillMode, onAnimationEnd} = props);
  /* SIMPLELINE ELEMENTS */
  let direction = props.direction ? props.direction : 'vertical';
  if (!(direction === 'horizontal' || direction === 'vertical')) direction = 'vertical';
  const length = props.length ? props.length :
    (direction === 'vertical' ? '100vh' : '100vw');
  const xy = direction === 'vertical' ? [width, length] : [length, width];

  const style: IFs.AnyJSON = {
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
      if (bottom !== 0) { style.bottom = bottom }
      else { style.top = top }
  } else {
    style.top = top;
  }
  if (left === 0) {
      if (right !== 0) { style.right = right }
      else { style.left = left }
  } else {
    style.left = left;
  }
  return (
    <div style={style} onAnimationEnd={onAnimationEnd} ></div>
  );
}

export default SimpleLine;
