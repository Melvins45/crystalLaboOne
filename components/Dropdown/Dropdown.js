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
      color: ${colors.blue};
      text-decoration: ${colors.blue} underline;
    }
    & li.active {
      color: ${colors.blue};
      text-decoration: ${colors.blue} underline;
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
        color: ${colors.blue};
        text-decoration: ${colors.blue} underline;
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
      overflow: hidden;
      &:after{
        height: 0;
        transition: height 0.5s linear;
        max-height: 50px;
      }
      & > div {
        transform-origin: top left;
        transform: scaleY(0);
        max-height: 0;
        margin-bottom: -2000px;
        transition: transform 0.5s, margin-bottom 0.5s cubic-bezier(1, 0, 1, 1),
                    visibility 0s 0.5s, max-height 0s 0.5s;
        visibility: hidden;
        max-height: 0;
      }
      ${({shown}) =>
        shown &&
      css`
      //background: red;
      &:after{
        content: '';
        height: 50px;
        transition: height 0.5s linear, max-height 0s .5s linear;
        max-height: 0px;
      }
      & > div {
        transform-origin: top left;
        transform: scaleY(1);
        transition: margin-bottom 0.5s cubic-bezier(0, 0, 0, 1), transform .5s;
        visibility: visible;
        margin-bottom: 0;
        max-height: 1000000px;
      }
      `    
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
const Dropdowny = ({type, parent, shown, children}) => (
    shown.bool ?
    shown.actual === parent &&
    <DropFirst type={type} canAnimate={shown.prev === 0} > {children} </DropFirst>
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

const MobileDropdown = ({type, ended, first, parent, shown, children}) => (
    
    <DropFirst type={type} shown={shown[parent]} canAnimate={shown.prev === 0} > 
      <div>
        {children} 
      </div>
    </DropFirst>
)

const DropSimples = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
      &:after{
        height: 0;
        transition: height 0.5s linear;
        max-height: 50px;
      }
      & > div {
        transform-origin: top left;
        transform: scaleY(0);
        max-height: 0;
        margin-bottom: -2000px;
        transition: transform 0.5s,margin-bottom 0.5s cubic-bezier(1, 0, 1, 1),
                    visibility 0s 0.5s, max-height 0s 0.5s;
        visibility: hidden;
        max-height: 0;
      }
      ${({shown}) =>
        shown &&
      css`
      &:after{
        content: '';
        height: 50px;
        transition: height 0.5s linear, max-height 0s .5s linear;
        max-height: 0px;
      }
      & > div {
        transform-origin: top left;
        transform: scaleY(1);
        transition: margin-bottom 0.5s cubic-bezier(0, 0, 0, 1), transform .5s;
        visibility: visible;
        margin-bottom: 0;
        max-height: 1000000px;
      }
      `    
      }
`
export function DropSimple({shown, parent, children}){
  return (
    <DropSimples shown={shown[parent]}>
      <div>
        {children}
      </div>
    </DropSimples>
  )
}

export default function Dropdown({type, windowWidth, parent, shown, children}) {
  if ( type === 'desktop' ) {
    return (<Dropdowny type={type} shown={shown} parent={parent}>
      {children}
    </Dropdowny>
    )
  }else{
    //console.log('In MobileDropdown', shown);
    
    return (
      <MobileDropdown
        type={type} 
        shown={shown} 
        parent={parent}>
        {children}
      </MobileDropdown>)
  }
  //return ( <div> {children} </div> )
}