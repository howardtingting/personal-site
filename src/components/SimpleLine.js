//horizontal and vertical lines
import React from 'react';
import 'animate.css';
import '../css/components/SimpleLine.css';
import { defaultProps } from '../utils/typeCheck';
import { useState } from 'react';

const SimpleLine = (props) => {
  const excludeTypes = ['width', 'height', 'color'];
  const defaults = defaultProps(props.options, excludeTypes);
  let position,
    opacity,
    top,
    bottom,
    right,
    left,
    width,
    height,
    color,
    animation,
    animationDuration,
    animationDirection,
    animationIterationCount,
    animationDelay,
    animationFillMode,
    onAnimationEnd;
  ({
    position,
    opacity,
    top,
    bottom,
    right,
    left,
    width,
    height,
    color,
    animation,
    animationDuration,
    animationDirection,
    animationIterationCount,
    animationDelay,
    animationFillMode,
    onAnimationEnd
  } = defaults);
  props = props.options;
  /* SIMPLELINE ELEMENTS */
  let direction = props.direction ? props.direction : 'vertical';
  if (!(direction === 'horizontal' || direction === 'vertical')) direction = 'vertical';
  const length = props.length ? props.length :
    (direction === 'vertical' ? '100vh' : '100vw');
  const xy = direction === 'vertical' ? [width, length] : [length, width];

  const style = {
    position: position,
    background: color,
    opacity: opacity.toString() + '%',
    minWidth: xy[0],
    minHeight: xy[1],
    maxWidth: xy[0],
    maxHeight: xy[1],
    overflow: 'hidden',
    animation: animation,
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
