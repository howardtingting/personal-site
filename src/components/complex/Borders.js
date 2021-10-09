import React from 'react';
import SimpleLine from '../SimpleLine';
import { defaultProps } from '../../utils/typeCheck';

const Borders = (props) => {
  const style = defaultProps(props);
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
  const horizontalColor = props.color ? props.color : 'linear-gradient(90deg, #000 0%, #DFC274 5%, #887534 35%, #DAC071 85%, #000 100%)';
  const verticalColor = props.color ? props.color : 'linear-gradient(0deg, #000 0%, #DFC274 5%, #887534 35%, #DAC071 85%, #000 100%)';
  let leftAnimation = props.animation || 'fadeInLeft';
  let rightAnimation = props.animation || 'fadeInRight';
  let upAnimation = props.animation || 'fadeInUp';
  let downAnimation = props.animation || 'fadeInDown';
  if (props.animation === 'none') {
    leftAnimation = 'unset';
    rightAnimation = 'unset';
    upAnimation = 'unset';
    downAnimation = 'unset';
  } else {
    leftAnimation = 'fadeInLeft';
    rightAnimation = 'fadeInRight';
    upAnimation = 'fadeInUp';
    downAnimation = 'fadeInDown';
  }

  const topOptions = {
    direction:'horizontal',
    top:1.5,
    width:1,
    length:style.width,
    color:horizontalColor,
    animation:leftAnimation,
    animationDuration:style.animationDuration,
  }

  const bottomOptions = {
    direction:'horizontal',
    bottom:1.5,
    width:1,
    length:style.width,
    color:horizontalColor,
    animation:rightAnimation,
    animationDuration:style.animationDuration,
  }

  const leftOptions = {
    left:1.5,
    width:1,
    length:style.height,
    color:verticalColor,
    animation:upAnimation,
    animationDuration:style.animationDuration,
  }

  const rightOptions = {
    right:1.5,
    width:1,
    length:style.height,
    color:verticalColor,
    animation:downAnimation,
    animationDuration:style.animationDuration,
  }
  const TopBorder = (<SimpleLine options={topOptions}/>),
        BottomBorder = (<SimpleLine options={bottomOptions}/>),
        LeftBorder = (<SimpleLine options={leftOptions}/>),
        RightBorder = (<SimpleLine options={rightOptions}/>);
  return (
    <div>
      {TopBorder}
      {BottomBorder}
      {LeftBorder}
      {RightBorder}
    </div>
  );
}

export default Borders
