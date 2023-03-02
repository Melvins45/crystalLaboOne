import {useState} from 'react'
import styled, { keyframes, css } from 'styled-components'
import colors from '../../utils/styles/colors'

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
    transform: translateX(0);
  }
  to {
    transform: translateX(${
      factorTranslate(prev, actual)+'px'});
  }
`
}
const DropStyle =`
    display: block;
    list-style: none;
    padding-left: 0;
    background: white;
    z-index: 999;
    position: absolute;
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
      color: white;
      background: ${colors.primary};
    }
    & li:active {
      transform: scale(0,7);
    }
`
const DropFirst = styled.ul`
    ${DropStyle}
    ${({canAnimate}) => canAnimate ? 
      css`animation: ${appear} 200ms linear;` : 
      css``
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

export default function Dropdown({parent, shown, children}) {
  return (<Dropdowny shown={shown} parent={parent}>
      {children}
    </Dropdowny>
  )
}