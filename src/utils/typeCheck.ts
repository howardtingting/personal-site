import {AnyJSON} from '../interfaces/interfaces';

export const isColor = (strColor:string): boolean => {
  const s = new Option().style;
  s.color = strColor;
  return s.color !== '';
}

export const validCss = (propName:string, propVal:any): boolean => {
  const s = document.createElement('div').style;
  s[propName as any] = propVal;
  const finalCssVal:string = s[propName as any];
  return ((finalCssVal !== '') && (typeof finalCssVal !== 'undefined'));
}

export const getScreenType = (width:number, height?:number) => {
  if (width < 1926 && width > 910) {
    return 'laptop';
  } else if (width >= 1926) {
    return 'wide';
  } else {
    return 'mobile';
  }
}
const pxTypes = ['top', 'bottom', 'right', 'left', 'width', 'height', 'borderWidth'];
const timeTypes = ['animationDelay', 'animationDuration'];
export const defaultProps_ = (props: AnyJSON, excludeTypes:any[]=[]) => {
  const style: AnyJSON = {};
  // Transfer ALL props into style
  Object.keys(props).forEach((type) => {
    style[type] = props[type];
  })
  // Define default values for style
  const propTypes: AnyJSON = {
    'position': 'absolute',
    'cursor': 'auto',
    'opacity': 1,
    'top': 0,
    'bottom': 0,
    'right': 0,
    'left': 0,
    'width': 0,
    'height': 0,
    'color': 'white',
    'borderStyle': 'solid',
    'borderWidth': 1,
    'animation': 'unset',
    'animationDuration': 3,
    'animationDirection': 'normal',
    'animationIterationCount': 1,
    'animationDelay': 0,
    'animationFillMode': 'none',
    'onAnimationEnd': (() => {}),
    'windowType': getScreenType(window.innerWidth),
    'zIndex': 'auto'
  };
  // Normalize time and dimension inputs
  pxTypes.forEach((type) => {
    if (typeof props[type] === 'number') {
      propTypes[type] = props[type] + 'px';
    } else if (typeof props[type] === 'string') {
      if (typeof parseInt(props[type]) === 'number') {
        propTypes[type] = props[type]
      }
    }
  });
  timeTypes.forEach((type) => {
    if (typeof props[type] === 'number') {
      propTypes[type] = props[type] + 's';
    }
  });
  // Set defaults
  Object.keys(propTypes).forEach((propName) => {
    style[propName] = validCss(propName, props[propName]) ? props[propName] : propTypes[propName];
  });

  // Remove defaults for original prop values for each excluded type
  excludeTypes.forEach((type) => {
    style[type] = props[type];
  })
  // Handling miscellaneous edge cases
  if (style.onClick) {
    style.cursor = 'pointer';
  } else {
    style.onClick = (() => {});
  }
  return style;
}

//Shape of props, defaults, and output of defaultProps() is determined by caller
export const defaultProps: (props: AnyJSON, defaults: AnyJSON) => AnyJSON = (props: AnyJSON, defaults: AnyJSON) => {
  const finalProp: AnyJSON = {}
  pxTypes.forEach((type) => {
    if (typeof props[type] === 'number') {
      defaults[type] = props[type] + 'px';
    } else if (typeof props[type] === 'string') {
      if (typeof parseInt(props[type]) === 'number') {
        defaults[type] = props[type]
      }
    }
    finalProp[type] = defaults[type];
  });
  timeTypes.forEach((type) => {
    if (typeof props[type] === 'number') {
      defaults[type] = props[type] + 's';
    }
    finalProp[type] = defaults[type];
  });
  Object.keys(defaults).forEach((propName) => {
    if (validCss(propName, defaults[propName])) {
      finalProp[propName] = validCss(propName, props[propName]) ? props[propName] : defaults[propName];
    } else {
      finalProp[propName] = defaults[propName]
    }
  });
  return finalProp;
}
