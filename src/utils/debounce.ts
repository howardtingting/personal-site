import * as IFs from '../interfaces/interfaces'
const debounce = function(fn: IFs.genericFn, ms: number) {
  let timer: any;
  return (_:any) => {
    clearTimeout(timer)
    timer = setTimeout(function(this: any, ...args) {
      timer = null
      fn.apply(this, args)
    }, ms)
  };
}
//debounce is a function that executes fn argument every ms time

export default debounce;
