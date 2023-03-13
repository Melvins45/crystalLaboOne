import {useState, useEffect} from 'react'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import devices from '../../utils/viewport breakpoints/viewportBreakpoints'
  
  export const ArticleSection = 
  styled.section`
    display: flex;
    width: 100%;//1200px;
    gap: 5em;
    & h1{
      font-size: 2.5rem;
      color: ${colors.primary};
    }
    & h3{
      font-size: 1.5rem;
      color: ${colors.blue};
    }
    
    @media ${devices.tablet} {
      //width: 100vh;
      //text-align: justify;
      & h1{
        font-size: 2.2rem;
      }
    }
  `
  
  export const ArticleContent = 
  styled.article`
    display: flex;
    flex-direction: column;
    margin-right: 4em;
    line-height: 1.7rem;
    margin-top: 1rem;
    width: 90%;
    &.alone{
      width: 100%;
      margin-left: 4em;
    }
    & h3{
      color: ${colors.blue};
      font-size: 1.6rem !important;
    }
    & h3.big{
      font-size: 1.6rem;
    }
    p{
      font-size: 1rem;
    }
    p.align-self{
      align-self: center;
    }
    @media ${devices.tablet} {
      width: 100%;
      margin-right: 1rem;
      margin-left: 1rem;
      &.alone{
        margin-left: 1em;
      }
      //text-align: justify;
    }
    @media ${devices.mobileM} {
      margin-right: 0.4rem;
      margin-left: 0.4rem;
      &.alone{
        margin-left: .4em;
      }
    }
  `
  
  export const ArticleMenu = 
  styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between
    margin-left: 1.5em;
    margin-bottom: 4em;
    /*position: sticky;
    top: 166px;*/
    width: 10%;
    @media ${devices.tablet}{
      display: none;
    }
  `
  
  export const ArticleSommary =
  styled.ul`
    list-style: none;
    position: sticky;
    top: ${ ({top}) => top }px;
    color: ${colors.secondary};
    margin-bottom: ${ ({topPub}) => topPub /3}px;
    z-index: 9;
    padding-left: 1em;
    & ul{
      list-style: none;
      padding:0;
    }
    & li{
      padding-left: 1em;
    }
    & li:hover{
      color: ${colors.primary};
    }
    & li[active=active]{
      color: ${colors.primary};
    }
    & li[under=1]{
      padding-left: 0.3rem;
    }
    & li[under=1]:hover{
      color: ${colors.blue};
    }
    & li[under=1][active=active]{
      color: ${colors.blue};
    }
    @media ${devices.tablet}{
      display: none;
      position: relative;
    }
  `
  
  export const ArticlePub = 
  styled.div`
    position: sticky;
    top: ${ ({top}) => top }px;
    padding-left: 1em;
    z-index: 9;
    text-align: center;
    @media ${devices.tablet}{
      display: none;
      position: relative;
    }
  `