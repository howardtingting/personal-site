//horizontal and vertical lines
import { styled } from '@mui/system';
import 'animate.css';
import '../css/lineKeyFrames.css';
/*
<Line
  xPos={'100px'}
  />
*/
const Line = (props) => {
  //{xPos, yPos, color, width, length, direction, loadAnimation, continuousAnimation}
  let direction = props.direction ? props.direction : 'vertical';
  if (!(direction === 'horizontal' || direction === 'vertical')) direction = 'vertical';
  const opacity = props.opacity ? props.opacity : '100%';
  const animation = props.animation ? props.animation: 'fadeIn';
  const animationDuration = props.animationDuration ? props.animationDuration : '0.4s';
  const xPos = props.xPos ? props.xPos : '0px';
  const yPos = props.yPos ? props.yPos : '0px';
  const length = props.length ? props.length :
    (direction === 'vertical' ? '100vh' : '100vw');
  const width = props.width ? props.width : '1px';
  const lineColor = props.color ? props.color : 'white';
  const xy = direction === 'vertical' ? [width, length] : [length, width];

  const StyledLine = styled('div')({
    position: 'absolute',
    left: xPos,
    top: yPos,
    background: lineColor,
    opacity: opacity,
    minWidth: xy[0],
    minHeight: xy[1],
    maxWidth: xy[0],
    maxHeight: xy[1],
    overflow: 'hidden',
    animation: animation,
    animationDuration: animationDuration
  });
  return (
    <StyledLine></StyledLine>
  );
}

Line.defaultProps = {
  /*
    only horizontal and vertical lines: divs with following characteristics:
    length:
    direction: horizontal|vertical
    loadAnimation:
    continuousAnimation:
  */
  /*
  https://www.youtube.com/watch?v=gm1QtePAYTM
  Use canvas with react
  points: [(x1,x2), (y1,y2)] //draws line from point to point; relative to container
                             //if length: draws line with slope ((y2-x2)/(y1-x1))
  angle: //angle of line with bottom of screen; does not work with points
  length: //default hits edges of container
  origin: (x, y) //default draws from top of container
  loadAnimation:
  continuousAnimation:
  */
}

export default Line;
