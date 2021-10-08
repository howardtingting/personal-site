import React from 'react';
import { styled } from '@mui/system';
import '../../css/components/nav.css';
import { useState } from 'react';
import Line from '../SimpleLine';


const Li = React.memo((props) => {
  const [hover, setHover] = useState(false);

  const key = props.dataKey ? props.dataKey : 0;
  const text = props.text ? props.text : `item #${key}`;

  /* ANIMATION */
  const animation = props.animation ? props.animation: 'fadeIn';
  const animationDuration = props.animationDuration ? props.animationDuration : 4;
  const animationDirection = props.animationDirection ? props.animationDirection : 'normal';
  const animationIterationCount = props.animationIterationCount ? props.animationIterationCount : 1;
  const animationDelay = props.animationDelay ? props.animationDelay : 0;
  const onAnimationEnd = props.onAnimationEnd ? props.onAnimationEnd : (() => {});

  const classNames = props.classNames ? props.classNames : [`navLi`, `navLi-${key}`];
  const classNameStr = classNames.toString().replace(',', ' ');
  const clickHandler = props.clickHandler ? props.clickHandler : (event) => {
    console.log(event);
  };
  const enterHoverHandler = props.enterHoverHandler ? props.enterHoverHandler : (event) => {
    setHover(true);
  }
  const exitHoverHandler = props.exitHoverHandler ? props.exitHoverHandler : (event) => {
    setHover(false);
  }

  const style = {
    animation:animation,
    animationDuration:animationDuration.toString() + 's',
    animationDirection:animationDirection,
    animationIterationCount:animationIterationCount.toString() + 's',
    animationDelay:animationDelay.toString() + 's',
    animationFillMode:'forwards'
  }

  return (
    <li
      key={key}
      style={style}
      className={classNameStr}
      onClick={clickHandler}
      onMouseEnter={enterHoverHandler}
      onMouseLeave={exitHoverHandler}> {text} </li>
  );
});

const Navbar = React.memo((props) => {
  /*
  WORKON (future): dimensions and position of navbar
  dimensions = [width, height]
  position = [x, y]
  */
  const fontSize = props.fontSize || '1em';
  const animation = props.animation || 'fadeIn';
  const navType = props.navType ? props.navType : 'left';
  const dimensions = props.dimensions ? props.dimensions : ['150px', '800px']
  const navList = props.navList ? props.navList : [
    {
      text: 'Projects',
      url: 'http://www.tingtech.us/projects',
      clickHandler: (() => {console.log('http://www.tingtech.us/info');})
    },
    {
      text: 'Github',
      url: 'https://github.com/howardtingting/',
      clickHandler: (() => {window.open('https://github.com/howardtingting/');})
    },
    {
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/in/howardtingting/',
      clickHandler: (() => {window.open('https://www.linkedin.com/in/howardtingting/');})
    },
    {
      text: 'Contact',
      url: '',
      clickHandler: (() => {})
    }
  ];
  const liGenerator = (navItem, key) => {
    return (
      <Li
      key={key}
      dataKey={key}
      animationDuration={key}
      animation={animation}
      clickHandler={navItem.clickHandler}
      text={navItem.text}/>);
  }
  const ul = []
  for (let i = 0; i < navList.length; i++) {
    ul.push(liGenerator(navList[i], i+1));
  }
  const NavContainer = styled('div')({
    height: '100vh',
    width: '170px',
    display: 'grid',
    placeItems: 'center',
    placeContent: 'center',
    fontSize: fontSize
  });
  const LeftNav = styled('ul')({
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: '[col-start] 20px [text] 150px [col-end]',
    gridTemplateRows: '[row-start] auto repeat(6, 50px [rowline]) auto [row-end]',/*[row1] 25% [row2] 25% [row3] 25% [row4] 25% [row-end]*/
    gridTemplateAreas: `
      '. .'
      'line first'
      'line second'
      'line third'
      'line fourth'
      'line fifth'
      'line sixth'
      '. .'
      `,
    /*?-items aligns items within individual cells*/
    /*justify-items: start; /* left align; start|center|end|stretch*/
    /*align-items: end; /* align to bottom start|center|end|stretch */
    placeItems: 'start', /*equivalent to justify-items: center; align-items: center; */
    /*?-content aligns everything inside the grid*/
    /*justify-content: start|center|end|stretch|space-around|space-between|space-evenly; horizontal alignment*/
    /*align-content: start|center|end|stretch|space-around|space-between|space-evenly; vertical alignment*/
    placeContent: 'space-evenly', /*equivalent to justify-content&align-content: space-evenly*/

    gridAutoRows: '30px',
    gridAutoColumns: 'auto',
    gridAutoFflow: 'column'
  })
  return (
    <NavContainer>
      <LeftNav>
        {ul}
      </LeftNav>
    </NavContainer>
    // <div className={`navContainer`}>
    //   <ul className={`navUl`}>
    //     {ul}
    //   </ul>
    // </div>
  )
});

export default Navbar;
