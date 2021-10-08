import React from 'react';
import 'animate.css';
import { defaultStyle } from '../utils/typeCheck';

const SimpleCircle = (props) => {
  const defaults = defaultStyle(props.options);
  let position,
    borderStyle,
    borderWidth,
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
    borderStyle,
    borderWidth,
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
  console.log(`height: ${height}`)
  const centerX = `calc(50vw - ${parseInt(width)/2}px)`
  const centerY = `calc(50vh - ${parseInt(height)/2}px)`
  const bottomY = `calc(100vh - ${parseInt(height)+20}px)`
  const style = {
    position: 'absolute',
    top: bottomY,
    left: centerX,
    width: width,
    height: height,
    opacity: opacity,
    animation: animation,
    animationDuration: animationDuration,
    animationDirection: animationDirection,
    animationIterationCount: animationIterationCount,
    animationDelay: animationDelay,
    animationFillMode: animationFillMode,
    borderRadius: '100%'
  }
  if (props.fill) {
    style.backgroundColor = color
  } else {
    style.borderStyle = borderStyle;
    style.borderWidth = borderWidth;
    style.borderColor=color;
  }
  style.zIndex=9002
  //create div with border radius
  /*
  Usage:
  <SimpleCircle
  width={50},
  height={100},
  color={'green'}/>
  */
  //Insert content into center of div
  return(
    <div style={style}>
    </div>)
}

export default SimpleCircle
