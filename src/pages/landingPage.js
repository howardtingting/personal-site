// LANDING PAGE
import React from 'react';
import SimpleLine from '../components/SimpleLine';
import Text from '../components/SimpleText';
import StyledText from '../components/complex/StyledText';
import { debounce } from '../utils/debounce';
import '../css/components/customKeyframes.css';
import { useState, useEffect } from 'react';

/*
1. Title
2. Background
3. Action Call
*/

const LandingPage = React.memo(() => {
  const [hoverSDE, setHoverSDE] = useState(false);
  const [finishAnimation, setFinishAnimation] = useState(false);
  const onHoverSDE = () => { setHoverSDE(true); }
  const onUnhoverSDE = () => { setHoverSDE(false);}

  // {finishAnimation && (<StyledText
  //     click={true}
  //     content={"<Software Engineer>"}
  //     bottom={"1224px"}
  //     left={"60vw"}
  //     fontSize={1.3}
  //     color={'#DAC071'}
  //     animation={'fadeInUp'}
  //     animationDuration={'3s'}/>)}
  //910-1860
  //480-910
  //1860-3600
  const highlight = 1;
  const noHighlight = 0.6;
  const [nameOpacity, setNameOpacity] = useState(noHighlight);
  const [sdeOpacity, setSdeOpacity] = useState(noHighlight);
  const NameText = (<StyledText
    content={"Howard Ting"}
    onClick={()=>{console.log('Navigating to Howard Ting profile page')}}
    bottom={"199px"}
    left={'50vw'}
    fontSize={5}
    opacity={nameOpacity}
    onHover={() => { setNameOpacity(highlight); }}
    onUnhover={() => { setNameOpacity(noHighlight); }}
    color={'#DAC071'}
    animation={'slideInRight'}
    underlineEnter={'slideInRight'}
    underlineExit={'fadeOut'}
    animationDuration={4}
    shadow={'red'}

    underlineColor={'linear-gradient(90deg, #000 0%, #DFC274 5%, #887534 35%, #DAC071 85%, #000 100%)'}
    onAnimationEnd={()=>{setFinishAnimation(true)}}
  />);

  const EngineerText = (<StyledText
    content={"<Software Engineer>"}
    onClick={()=>{console.log('Navigating to Projects/Archive')}}
    bottom={"165px"}
    left={'56vw'}
    fontSize={1.5}
    opacity={sdeOpacity}
    onHover={() => { setSdeOpacity(highlight); }}
    onUnhover={() => { setSdeOpacity(noHighlight); }}
    color={'#DAC071'}
    animation={'slideInLeft'}
    underlineEnter={'slideInRight'}
    underlineExit={'fadeOut'}
    animationDuration={5}
    shadow={'red'}
    underlineColor={'linear-gradient(90deg, #000 0%, #DFC274 5%, #887534 35%, #DAC071 85%, #000 100%)'}
    onAnimationEnd={()=>{setFinishAnimation(true)}}
  />);

  //480-910
  //1860-3600
  return(<div className="landingPage">
    {NameText}
    {EngineerText}
  </div>);
});

export default LandingPage;
