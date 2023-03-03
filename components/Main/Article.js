import {useState, useEffect} from 'react'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'
    
  export const ArticleSection = 
  styled.section`
    display: flex;
    width: 1200px;
    gap: 5em;
    & h3{
      color: ${colors.primary};
    }
    & h3[under]{
      color: ${colors.blue};
    }
  `
  
  export const ArticleContent = 
  styled.article`
    display: block;
    margin-right: 4em;
    width: 90%;
    & h3{
      color: ${colors.primary};
    }
  `
  
  export const ArticleMenu = 
  styled.nav`
    margin-left: 1.5em;
    /*position: sticky;
    top: 166px;*/
    width: 10%;
    gap: 30rem;
  `
  
  export const ArticleSommary =
  styled.ul`
    list-style: none;
    position: sticky;
    top: ${ ({top}) => top }px;
    color: ${colors.secondary};
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
  `
  
  export const ArticlePub = 
  styled.div`
    /*position: sticky;
    top: ${ ({top}) => top }px;*/
    text-align: center;
    margin-top: 30em;
  `