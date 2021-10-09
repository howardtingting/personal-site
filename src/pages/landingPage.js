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
  const noHighlight = 0.8;
  const [logoOpacity, setLogoOpacity] = useState(highlight)
  const [nameOpacity, setNameOpacity] = useState(noHighlight);
  const [devOpacity, setDevOpacity] = useState(noHighlight);
  const [consultOpacity, setConsultOpacity] = useState(noHighlight);

  const LogoText = (<StyledText
    content={"TingTech"}
    zIndex={9003}
    top={"40px"}
    left={'40px'}
    fontSize={0.9}
    opacity={logoOpacity}
    onHover={() => { setLogoOpacity(noHighlight); }}
    onUnhover={() => { setLogoOpacity(highlight); }}
    onClick={() => {window.location.reload()}}
    color={'#DAC071'}
    animation={'fadeIn'}
    animationDuration={1}
    shadow={'red'}
    shadowOffset={0.5}
    underlined={true}
    underlineColor={'transparent'}/>);

  const NameText = (<StyledText
    content={"Howard Ting"}
    bottom={"199px"}
    right={'10vw'}
    fontSize={5}
    opacity={nameOpacity}
    color={'#DAC071'}
    animation={'slideInRightDark'}
    underlineEnter={'slideInRight'}
    underlineExit={'fadeOut'}
    animationDuration={2}
    shadow={'red'}
    scaleSize={true}
    underlined={true}
    underlineColor={'linear-gradient(90deg, #000 0%, #DFC274 5%, #887534 35%, #DAC071 85%, #000 100%)'}
    onAnimationEnd={()=>{setFinishAnimation(true)}}/>);

  const DeveloperText = (<StyledText
    content={"<Web Development>"}
    onClick={()=>{console.log('Navigating to Projects/Archive')}}
    bottom={"165px"}
    right={'14vw'}
    fontSize={1}
    opacity={devOpacity}
    onHover={() => { setDevOpacity(highlight); }}
    onUnhover={() => { setDevOpacity(noHighlight); }}
    color={'#DAC071'}
    animation={'slideInUpDark'}
    underlineEnter={'slideInRight'}
    underlineExit={'fadeOut'}
    underlinePadding={4}
    animationDuration={3.7}
    shadow={'red'}
    underlineColor={'linear-gradient(90deg, #000 0%, #DFC274 5%, #887534 35%, #DAC071 85%, #000 100%)'}
    onAnimationEnd={()=>{setFinishAnimation(true)}}
  />);

  const ConsultText = (<StyledText
    content={"<Software Consultation>"}
    onClick={()=>{console.log('Navigating to Projects/Archive')}}
    bottom={"165px"}
    right={'calc(14vw + 233px)'}
    fontSize={1}
    opacity={consultOpacity}
    onHover={() => { setConsultOpacity(highlight); }}
    onUnhover={() => { setConsultOpacity(noHighlight); }}
    color={'#DAC071'}
    animation={'slideInFarUpDark'}
    underlineEnter={'slideInRight'}
    underlineExit={'fadeOut'}
    underlinePadding={4}
    animationDuration={2.8}
    shadow={'red'}
    underlineColor={'linear-gradient(90deg, #000 0%, #DFC274 5%, #887534 35%, #DAC071 85%, #000 100%)'}
    onAnimationEnd={()=>{setFinishAnimation(true)}}
  />);


  //480-910
  //1860-3600
  return(<div className="landingPage">
    {LogoText}
    {NameText}
    {(ConsultText)}
    {DeveloperText}
  </div>);
});

export default LandingPage;
