import * as IFs from '../interfaces/interfaces';
import React from 'react';
import 'animate.css';
import { defaultProps, getScreenType } from '../utils/typeCheck';

const SimpleCircle: React.FC<IFs.AnyJSON>  = (props) => {
  const defaults = {
    position: 'absolute',
    cursor: 'auto',
    opacity: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: 0,
    height: 0,
    color: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    animationName: 'none',
    animationDuration: 1,
    animationDirection: 'normal',
    animationIterationCount: 1,
    animationDelay: 0,
    animationFillMode: 'both',
    onAnimationEnd: () => {},
    zIndex: 'auto',
    onClick: () => {},
    windowType: getScreenType(window.innerWidth),
    fill: props.options.fill ? props.options.fill : false,
    content: props.options.content ? props.options.content : ''
  };
  props = defaultProps(props.options, defaults);
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
      zIndex,
      onClick,
      windowType,
      fill,
      content;
  ({
    position, cursor, opacity, top, bottom, right, left, width, height, color, borderStyle, borderWidth, animationName, animationDuration, animationDirection, animationIterationCount, animationDelay, animationFillMode, onAnimationEnd, zIndex, onClick, windowType, fill, content
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
      <span style={{color:'white'}}>{content}</span>
    </div>)
}

export default SimpleCircle
