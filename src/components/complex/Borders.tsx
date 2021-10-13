import * as IFs from '../../interfaces/interfaces'
import React from 'react';
import SimpleLine from '../SimpleLine';
import { defaultProps_ } from '../../utils/typeCheck';

const Borders: React.FC<IFs.AnyJSON> = (props: IFs.AnyJSON) => {
  const style = defaultProps_(props);
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
  const horizontalColor = props.color ? props.color : '#9A8541';
  const verticalColor = props.color ? props.color : '#9A8541';
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
    animationName:leftAnimation,
    animationDuration:style.animationDuration,
  }

  const bottomOptions = {
    direction:'horizontal',
    bottom:1.5,
    width:1,
    length:style.width,
    color:horizontalColor,
    animationName:rightAnimation,
    animationDuration:style.animationDuration,
  }

  const leftOptions = {
    left:1.5,
    width:1,
    length:style.height,
    color:verticalColor,
    animationName:upAnimation,
    animationDuration:style.animationDuration,
  }

  const rightOptions = {
    right:1.5,
    width:1,
    length:style.height,
    color:verticalColor,
    animationName:downAnimation,
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
