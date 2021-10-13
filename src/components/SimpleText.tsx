import * as IFs from '../interfaces/interfaces'
import React from 'react';
import PropTypes from 'prop-types'
import {useState,useEffect} from 'react'
import {defaultProps} from '../utils/typeCheck';
import 'animate.css';
/*
<SimpleText
  content = {"Howard Ting"}
  xPos = {"50vw"}
  yPos = {"50vh"}
/>
*/
const SimpleText: React.FC<IFs.AnyJSON> = (props) => {
  // USES defaultProps()
  const defaults = {
    width: 0,
    height: 0,
    textContent: 'Place Content Here',
    bgWidth: '100%',
    bgHeight: '100%',
    color: 'white',
    onHover: (() => {}),
    onUnhover: (() => {}),
    fontScale: 1,
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0',
    opacity: '100%',
    click: props.onClick ? true : false,
    cursor: props.onClick ? 'pointer' : 'auto',
    onClick: (()=>{ console.log(`Clicked SimpleText component`) }),
    writingMode: 'horizontal-tb',
    animationName: 'fadeInRight',
    animationDuration: 5,
    animationDirection: 'normal',
    animationIterationCount: 1,
    animationDelay: 0,
    onAnimationEnd: (() => {})
  }
  props = defaultProps(props, defaults);
  let textContent, width, height, bgWidth, bgHeight, color, onHover, onUnhover, fontScale, position, top, bottom, right, left, opacity, click, cursor, onClick, writingMode, animationName, animationDuration, animationDirection, animationIterationCount, animationDelay, onAnimationEnd;
  ({textContent, width, height, bgWidth, bgHeight, color, onHover, onUnhover, fontScale, position, top, bottom, right, left, opacity, click, cursor, onClick, writingMode, animationName, animationDuration, animationDirection, animationIterationCount, animationDelay, onAnimationEnd} = props)
  const style: IFs.AnyJSON = {
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
  }
  if (top === '0') {
      if (bottom !== '0') { style.bottom = bottom }
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
    <div style={{width:bgWidth, height:bgHeight, top:style.top, position:'absolute'}}
         onMouseEnter={onHover}
         onMouseLeave={onUnhover}
         onAnimationEnd={onAnimationEnd}>
      <span
        style={style}
        onClick={onClick}
        onAnimationEnd={onAnimationEnd}>{ textContent }</span>
    </div>
  )
}

SimpleText.defaultProps = {
  textContent: 'Place Content Here',
}

SimpleText.propTypes = {
  textContent: PropTypes.string, //.isRequired
}

export default SimpleText
