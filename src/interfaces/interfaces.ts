//css types
export type timeType = `${number}s` | number;
type percentString = `${number}%`;
type cssUnits = "px" | "vw" | "vh";
export type cssDimensions = `${number}${cssUnits}`;
type animationTypes = "fadeInLeft" | "fadeInRight" | "fadeIn";
export type animationDirection = "normal" | "reverse" | "alternate" | "alternate-reverse";
type animationFillMode = "none" | "forwards" | "backwards" | "both";
export type positionType = "absolute" | "relative" | "static" | "fixed" | "sticky" | "initial" | "inherit";
type overflowType = "visible" | "hidden" | "scroll" | "auto";
export type genericFn = (...args: any[]) => any;
export type writingMode = 'horizontal-tb' | 'vertical-rl' | 'vertical-lr' | 'inherit' | 'initial' | 'revert' | 'unset';
export interface CssStyle {
  position?: positionType;
  height?: number | cssDimensions;
  width?: number | cssDimensions;
  [key: anyKey]: any;
}

//generic types
type anyKey = string | number | symbol;
export interface StrKeyJSON {
  [key: string]: any
}
export interface AnyJSON {
  [key: anyKey]: any
}

//specific types
export type screenType = 'mobile' | 'laptop' | 'wide';
