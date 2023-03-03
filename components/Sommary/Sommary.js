import {useReducer, useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import { ArticleMenu,ArticleSection, ArticleContent, ArticleSommary, ArticlePub} from '../Main/Article'
//import { Carousel } from 'react-responsive-carousel'
//import Carousel from 'react-bootstrap/Carousel'

export default function Sommary({content}){
  //console.log('It is ', content.articleBreakPoints)
  
  const articleBreakpoints = content
           .articleBreakPoints
           .filter( 
             (article) => article.sub === 0 
           ).map(
             article => article.name
           )

  const subArticleBreakpoints = content
           .articleBreakPoints
           .filter( 
             (article) => article.sub === 1
           ).map(
             article => article.name
           )

  let initialBreaks = {}
  articleBreakpoints.map((article,index) =>{
    initialBreaks = Object.assign(initialBreaks, {[article]: index===0 ? true : false })
  } )

  let initialSubBreaks = {}
  subArticleBreakpoints.map((article,index) => {
    initialBreaks = Object.assign(initialBreaks, {[article]: index===0 ? true : false })
  } )

  function reducerActiveSommary(state, action){
    let breaks = {}
    articleBreakpoints.map((article,index) => { 
    breaks = Object.assign(breaks, {[article]: false })
} )
    breaks[action.active] = true
    return breaks
}

  function reducerSubActiveSommary(state, action){
    let breaks = {}
    subArticleBreakpoints.map((article,index) => {
      breaks = Object.assign(breaks, {[article]: false })
} )
    if (activeSommaryLink[
      content.articleBreakPoints
        .filter(article => article.name === action.active)
        .map( article => article.parent )
    ]){
      breaks[action.active] = true
    }
    return breaks
}

  //console.log('subBreaks is', subArticleBreakpoints)
  
  const [activeSommaryLink, setActiveSommaryLink] = useReducer(reducerActiveSommary, initialBreaks)
  const [subActiveSommaryLink, setSubActiveSommaryLink] = useReducer(reducerSubActiveSommary, initialSubBreaks)
  
  useEffect( () => {
    const eltTop = (id) => {
      //console.log('id to get top is '+id)
    return document.querySelector('#'+id).getBoundingClientRect().top}
    
    
    /*window.addEventListener( 'scroll', function(e){
      let hadSetAnActive = false
      articleBreakpoints.slice(0).reverse().map( (article) => {
        if( !hadSetAnActive && window.innerHeight >= eltTop(article) ){
          setActiveSommaryLink({active: article})
          hadSetAnActive = true
        }
      })
    })
    
    window.addEventListener( 'scroll', function(e){
      let hadSetAnActive = false
      subArticleBreakpoints.slice(0).reverse().map( (article) => {
        if( !hadSetAnActive && window.innerHeight >= eltTop(article) ){
          setSubActiveSommaryLink({active: article})
          hadSetAnActive = true
        }
      })
    })*/
  })
  
  return (
    <ArticleSommary id="sommary" top={136} >
      <h3> Sommaire </h3>
      {
        content.articleBreakPoints.map( (article, index) => 
        article.sub === 0 &&
        (<li key={article.name+'-'+index} active={ activeSommaryLink[article.name] ? 'active' : ''  }>
          <Link href={'#'+article.name}>
            {article.title} 
          </Link>
          <ul>
          {
            content.articleBreakPoints
              .filter(subArticle => (subArticle.sub === 1 &&subArticle.parent === article.name) )
              .map( subArticle => (
                <li key={subArticle.name+'-'+index} under={1} active={subActiveSommaryLink[subArticle.name] ? 'active' : ''} >
                  <Link href={'#'+subArticle.name}>
                    {subArticle.title}
                  </Link>
                </li>
              )
            )
          }
          </ul>
        </li>)
      ) 
    }
    </ArticleSommary>
  )
}