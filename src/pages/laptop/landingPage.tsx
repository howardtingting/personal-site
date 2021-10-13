// LANDING PAGE
import React from 'react';
import StyledText from '../../components/complex/StyledText';
import { useState, useEffect } from 'react';

/*
1. Title
2. Background
3. Action Call
*/

const LandingPage = React.memo((props) => {
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
    textContent={"TingTech"}
    zIndex={9003}
    top={"40px"}
    left={'40px'}
    fontScale={0.9}
    opacity={logoOpacity}
    onHover={() => { setLogoOpacity(noHighlight); }}
    onUnhover={() => { setLogoOpacity(highlight); }}
    onClick={() => {window.location.reload()}}
    color={'#DAC071'}
    animationName={'fadeIn'}
    animationDuration={1}
    shadow={'red'}
    shadowOffset={0.5}
    underlined={true}
    underlineColor={'transparent'}/>);

  const NameText = (<StyledText
    textContent={"Howard Ting"}
    bottom={"199px"}
    right={'10vw'}
    fontScale={5}
    opacity={nameOpacity}
    color={'#DAC071'}
    animationName={'slideInRightDark'}
    underlineEnter={'slideInRight'}
    underlineExit={'fadeOut'}
    underlinePadding={10}
    animationDuration={2}
    shadow={'red'}
    scaleSize={true}
    underlined={true}
    underlineColor={'#9A8541'}
    onAnimationEnd={()=>{}}/>);

  const DeveloperText = (<StyledText
    textContent={"<Web Development>"}
    onClick={()=>{console.log('Navigating to Projects/Archive')}}
    bottom={"155px"}
    right={'14vw'}
    fontScale={1}
    opacity={devOpacity}
    onHover={() => { setDevOpacity(highlight); }}
    onUnhover={() => { setDevOpacity(noHighlight); }}
    color={'#DAC071'}
    animationName={'slideInUpDark'}
    underlineEnter={'slideInRightDark'}
    underlineExit={'fadeOut'}
    underlinePadding={4}
    animationDuration={2.3}
    shadow={'red'}
    shadowOffset={0.5}
    underlineColor={'#9A8541'}
    onAnimationEnd={()=>{}}
  />);

  const ConsultText = (<StyledText
    textContent={"<Software Consultation>"}
    onClick={()=>{console.log('Navigating to Projects/Archive')}}
    bottom={"155px"}
    right={'calc(14vw + 233px)'}
    fontScale={1}
    opacity={consultOpacity}
    onHover={() => { setConsultOpacity(highlight); }}
    onUnhover={() => { setConsultOpacity(noHighlight); }}
    color={'#DAC071'}
    animationName={'slideInFarUpDark'}
    underlineEnter={'slideInRightDark'}
    underlineExit={'fadeOut'}
    underlinePadding={4}
    animationDuration={2.25}
    shadow={'red'}
    shadowOffset={0.5}
    underlineColor={'#9A8541'}
    onAnimationEnd={()=>{/*last animation; do something*/}}
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
