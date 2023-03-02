import React from 'react'
import colors from './styles/colors'
import styled, { keyframes } from 'styled-components'
 
const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
 
    to {
    transform: rotate(360deg);
    }
`
const translateSkewed = ( width, widthGlobal ) => keyframes`
   from {
     transform: translateX(-${width}) skewX(-0.06turn);
   }
   to {
    transform: translateX(${widthGlobal}) skewX(-0.06turn);
   }
`
 
export const Loader = styled.div`
   padding: 10px;
   border: 6px solid ${colors.primary};
   border-bottom-color: transparent;
   border-radius: 22px;
   animation: ${rotate} 1s infinite linear;
   height: 0;
   width: 0;
`
const globalLoaderImgWidtho = '0rem'
const loaderImgWidth = (width) => {
   globalLoaderImgWidtho=width
   return width
}
const globalLoaderImgHeight = '0rem'
const loaderImgHeight = (height) => {
   globalLoaderImgHeight = height
   return height
}
const globalBeforeLoaderImgWidth = ( globalLoaderImgWidth, divider ) => {
   let numberWidth = 0
   if ( typeof globalLoaderImgWidth.charAt(2) == 'number' ){
     numberWidth = parseInt( globalLoaderImgWidth.charAt(0) + globalLoaderImgWidth.charAt(1) + globalLoaderImgWidth.charAt(2) ) / divider
     return numberWidth + globalLoaderImgWidth.slice(3)
   }else if ( typeof globalLoaderImgWidth.charAt(1) == 'number' ) {
     numberWidth = parseInt( globalLoaderImgWidth.charAt(0) + globalLoaderImgWidth.charAt(1) ) / divider
     return numberWidth + globalLoaderImgWidth.slice(2)
   }else{
     numberWidth = parseInt( globalLoaderImgWidth.charAt(0) ) / divider
     return numberWidth + globalLoaderImgWidth.slice(1)
   }
} 

export function LoaderImg({ width, height, rounded, theme }) {
   const LoaderImg = styled.div`
      width: ${ width };
      height: ${ height };
      border-radius: ${ rounded && `50%` };
      background: ${ theme === 'light' ? colors.loaderLight : colors.loaderDark };
      position: relative;
      //z-index: 2;
      
      &:before{
        content: '';
        top: 0;
        left: 0;
        position: absolute;
        //z-index:3;
        width: ${width.charAt(0) /3+width.slice(1) };
        height: 100%;
        background: ${ theme === 'light' ? colors.backgroundLight : colors.backgroundDark };
        animation: ${translateSkewed( globalBeforeLoaderImgWidth(width, 3),  width ) } 1s infinite linear;
      }
   `
   return <LoaderImg/>
 }
 
 export const testLoad = ( loading ) => {
   return typeof loading === 'undefined' || loading === true
 }