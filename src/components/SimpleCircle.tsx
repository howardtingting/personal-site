import * as IFs from '../interfaces/interfaces';
import React from 'react';
import 'animate.css';
import { defaultProps_ } from '../utils/typeCheck';

const SimpleCircle: React.FC<IFs.AnyJSON>  = (props) => {
  props = defaultProps_(props.options);
  let position,
    cursor,
    opacity,
    top,
    bottom,
    right,
    left,
    width,
    height,
    color,
    borderStyle,
    borderWidth,
    animationName,
    animationDuration,
    animationDirection,
    animationIterationCount,
    animationDelay,
    animationFillMode,
    onAnimationEnd,
    onClick,
    windowType,
    zIndex;
  ({
    position,
    cursor,
    opacity,
    top,
    bottom,
    right,
    left,
    width,
    height,
    color,
    borderStyle,
    borderWidth,
    animationName,
    animationDuration,
    animationDirection,
    animationIterationCount,
    animationDelay,
    animationFillMode,
    onAnimationEnd,
    onClick,
    windowType,
    zIndex
  } = props);
  const centerX = `calc(50vw - ${parseInt(width)/2}px)`
  const centerY = `calc(50vh - ${parseInt(height)/2}px)`
  const bottomY = `calc(100vh - ${parseInt(height)+20}px)`
  const style: IFs.AnyJSON = {
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
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: zIndex
  }
  if (props.fill) {
    style.backgroundColor = color
  } else {
    style.borderStyle = borderStyle;
    style.borderWidth = borderWidth;
    style.borderColor=color;
  }
  return(
    <div style={style} onClick={onClick}>
      <span style={{color:'white'}}>{props.content}</span>
    </div>)
}

export default SimpleCircle
