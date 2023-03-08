import {useState} from 'react'
import styled, { keyframes, css } from 'styled-components'
import colors from '../../utils/styles/colors'
import devices from '../../utils/viewport breakpoints/viewportBreakpoints'

const appear = keyframes`
  from {
    transform: translateY(-5px);
    opacity: 0;
  }
  to {
    transform: translateY(5px);
    opacity: 1;
  }
`
const appearInMobile = keyframes`
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
`

const disappearInMobile = keyframes`
  from {
    //display: flex;
    position: relative;
    transform: scaleY(1);
  }
  to {
    //display: none;
    position: absolute;
    transform: scaleY(0);
  }
`
const noAnimation = keyframes`
  from{}to{}
`
const clicked = keyframes`
  0% {
    transfrom: scale(1);
  }
  50% {
    transform: scale(0,7);
  }
  100% {
    transform: scale(1);
  }
`
const child = [
  <li> One </li>,
  <li> Two </li>,
  <li> Three </li>
]
const eltHeight = (id) => {
    return document.querySelector('#nav-li-'+id).getBoundingClientRect().x}
const factorTranslate = (prev, actual) => {
    return eltHeight(actual) - eltHeight(prev)
}
const translateTo = (prev, actual, setMoving) => {
  //setMoving(true)
  
  return keyframes`
  from {
    //display: flex;
    transform: translateX(0);
  }
  to {
    //display: none;
    transform: translateX(${
      factorTranslate(prev, actual)+'px'});
  }
`
}
const DropStyle =`
    display: flex;
    flex-direction: column;
    justify-content: center;
    //align-items: center;
    list-style: none;
    padding-left: 0;
    background: white;
    z-index: 999;
    position: absolute;
    width: auto;
    min-width: 10rem;
    border: 1px solid black;
    border-radius: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    transform: translateY(5px) scale(1);
    & li {
      color: ${colors.black};
      padding: 10px;
    }
    & li:hover {
      color: ${colors.primary};
      text-decoration: ${colors.primary} underline;
    }
    & li:active {
      //transform: scale(0,7);
    }
    @media ${devices.tablet}{
      position: relative;
      width: auto;
      //margin-top: 1rem;
      border: none;
      background: inherit;
      //z-index: 0;
      & li:hover {
        color: ${colors.primary};
        text-decoration: ${colors.primary} underline;
      }
    }
`
const DropFirst = styled.ul`
    ${DropStyle}
    ${({canAnimate}) => canAnimate ? 
      css`animation: ${appear} 200ms linear;` : 
      css``
    } 
    @media ${devices.tablet}{
      transform-origin: top left;
      /*display: 
      ${ ({ended, first, shown}) => 
      !first ? 
      shown ? 'flex'
      : !ended ? 'none' : 'flex' 
      : 'none' };*/
      ${({first, shown}) => !first ?  
        shown ? 
      css`
      display: flex;
      position: relative;
      transform: scaleY(1);
      animation: ${appearInMobile} 200ms linear;` : 
      css`
      display: flex;
      position: absolute;
      transform: scaleY(0);
      animation: ${disappearInMobile} 200ms linear;` :
      css`
      display: none;
      `
      } 
    }
`
const DropAfter = styled.ul`
    ${DropStyle}
    transform: translateX(${({shown}) => 
    factorTranslate(shown.prev,shown.actual)
    +'px'}) ;
    animation: ${({shown, setMoving})=>
      translateTo(shown.prev, shown.actual, setMoving)} 
      300ms linear;
`
const DropNull = styled.ul`
    display: none;
`
const Dropdowny = ({parent, shown, children}) => (
    shown.bool ?
    shown.actual === parent &&
    <DropFirst canAnimate={shown.prev === 0} > {children} </DropFirst>
    /*shown.prev === 0 ? 
      shown.actual === parent && 
        <DropFirst>{children}</DropFirst>  
      : shown.prev === shown.actual ?
          shown.prev === parent &&
          <DropFirst>{children}</DropFirst>
          : shown.prev === parent && 
            <DropAfter setMoving={setMoving} shown={shown} >{children}</DropAfter>
            */
    : <DropNull/>
)

const MobileDropdown = ({ended, first, parent, shown, children}) => (
    
    <DropFirst ended={ended} first={first} shown={shown[parent]} canAnimate={shown.prev === 0} > {children} </DropFirst>
)

export default function Dropdown({first, windowWidth, parent, shown, children}) {
  const[ended, setEnded] = useState(false)
  if ( windowWidth > 768 )
    return (<Dropdowny shown={shown} parent={parent}>
      {children}
    </Dropdowny>
  )
  else
    return (<MobileDropdown onAnimationEnd={ () => { console.log("the  anim ends");shown[parent] ? setEnded(false) : setEnded(true) } } ended={ended} first={first} shown={shown} parent={parent}>
      {children}
    </MobileDropdown>
  )
}